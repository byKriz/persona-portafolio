import desing from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import { Card } from "@/components/Card";

export const Services = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1">Servicios que ofrezco</h3>
        <p className="text-md py-2 leading-8 text-gray-800">
          Soy un desarrollador
          <span className="text-teal-500"> frontend </span>
          que ofrece servicios de alta calidad para la creación de sitios web y
          aplicaciones web. Mi experiencia incluye el diseño, la codificación y
          la implementación de soluciones
          <span className="text-teal-500"> innovadoras </span>
          utilizando tecnologías como
          <span className="text-teal-500">
            {" "}
            HTML, CSS, JavaScript y ReactJS.
          </span>
        </p>
      </div>

      {/* card system */}
      <div>
        <Card
          img={desing}
          title="Hermosos Diseños"
          text={
            "Creando hermosos diseños para tu web, con las últimas herramientas de diseño web"
          }
          subtitle="Herramientas que uso"
          tools={["Scss", "Tailwind CSS", "Figma"]}
        />
        <Card
          img={code}
          title="Hermosos Diseños"
          text={"Creando hermosos diseños para tu web"}
          subtitle="Herramientas que uso"
          tools={["Scss", "Tailwind CSS", "Figma"]}
        />
        <Card
          img={consulting}
          title="Hermosos Diseños"
          text={"Creando hermosos diseños para tu web"}
          subtitle="Herramientas que uso"
          tools={["Scss", "Tailwind CSS", "Figma"]}
        />
      </div>
    </section>
  );
};
