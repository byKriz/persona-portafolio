import Image from "next/image";
import deved from "../public/dev-ed-wave.png"; //nota cambiar la imagen despues
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const Profile = () => {
  return (
    <section className="min-h-screen">
      <nav className=" py-10 mb-12 flex justify-between">
        <h1 className=" text-xl font-burtons">developedbyed</h1>
        <ul className=" flex items-center">
          <li>
            <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
          </li>
          <li>
            <a
              href="#"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className=" text-center p-5">
        <h2 className=" text-5xl py-2 text-teal-600 font-medium">
          Cristian Esquivel
        </h2>
        <h3 className="text-2xl py-2">Frontend Developer.</h3>
        <p className="text-md py-5 leading-8 text-gray-800">
          Soy
          <span className="text-teal-500"> Cristian Esquivel, </span>
          un desarrollador frontend con experiencia en HTML, CSS, JavaScript y
          ReactJS. Aquí encontraras mi portafolio, en donde presento algunos de
          mis proyectos más recientes. ¡Gracias por visitar!
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-12 py-3 text-gray-600">
        <AiFillLinkedin />
        <AiFillGithub />
      </div>
      <div className="mx-auto mb-6 bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
        <Image src={deved} layout="fill" objectFit="cover" />
        {/* lo voy a tener que cambiar mas adelante */}
      </div>
    </section>
  );
};
