import Image from "next/image";
import Link from "next/link";

export const Project = ({ img, title = "Titulo", link }) => {
  return (
    <div className="group relative items-center justify-center overflow-hidden cursor-pointer my-4">
      <div className="">
        <Image
          src={img}
          className="h-full w-full object-cover group-hover:scale-125 transition-transform"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-500 group-hover:from-teal-300 group-hover:via-teal-400 group-hover:to-teal-500 group-hover:opacity-80"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[74%] group-hover:translate-y-0 transition-all">
        <h4 className="text-3xl font-bold text-white">{title}</h4>
        <p className="text-lg italic text-white mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, nobis!
          Veritatis fugiat, magni amet tenetur beatae non illum accusamus
        </p>
        <Link href={'https://www.google.com/'}>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
            ver más
          </button>
        </Link>
      </div>
    </div>
  );
};
