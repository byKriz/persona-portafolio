import { Project } from "@/components/Project";
import React from "react";
import web1 from "../public/landingPage.png";
import web2 from "../public/movieApp.png";
import web3 from "../public/pokedexApp.png";

export const Portafolio = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1">Portafolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800">
          Mis proyectos web tienen como objetivo brindar soluciones
          <span className="text-teal-500"> digitales creativas </span>y
          <span className="text-teal-500"> funcionales </span>
          para los usuarios. Como desarrollador frontend, utilizo diversas
          herramientas y tecnologías para crear aplicaciones web modernas y
          atractivas.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800">
          En la construcción de mis proyectos, una de las claves es el consumo
          de
          <span className="text-teal-500"> APIs, </span>
          lo que me permite acceder a una gran cantidad de datos y
          funcionalidades de otras aplicaciones para enriquecer mi propia app.
          Además, me gusta utilizar
          <span className="text-teal-500"> Figma </span>
          para crear prototipos y maquetas de mis proyectos, lo que me permite
          visualizar el diseño de la aplicación de manera clara y precisa antes
          de comenzar a trabajar en el código. En cuanto a las tecnologías que
          utilizo,
          <span className="text-teal-500"> ReactJS </span>
          es mi framework preferido para construir aplicaciones web dinámicas y
          escalables. Con su flexibilidad, gran comunidad de desarrolladores y
          facilidad de integrar otras herramientas y librerías, puedo asegurarme
          de brindar una experiencia de usuario excepcional en mis proyectos.
          Aquí les muestro algunos de mis proyectos:
        </p>
      </div>
      <div>
        <Project img={web1} title="Landing Page"/>
        <Project img={web2} title="Movie App"/>
        <Project img={web3} title="Pokedex App"/>
      </div>
    </section>
  );
};
