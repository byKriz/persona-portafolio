import Image from "next/image";

export const Card = ({ img, title, text, subtitle, tools }) => {
  return (
    <div className="text-center shadow-lg rounded-xl my-10">
      <Image src={img} width={100} height={100} className="m-auto" />
      <h3 className="text-lg font-medium pt-8 pb-2">{title}</h3>
      <p className="py-2">{text}</p>
      <h4 className="py-4 text-teal-600">{subtitle}</h4>
      {tools.map((tool) => (
        <p className="text-gray-800 py-1">{tool}</p>
      ))}
    </div>
  );
};
