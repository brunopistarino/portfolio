import Image from "next/image";

const techStack = [
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "Supabase",
  "React",
  "SASS",
  "Swift",
  //   "RevenueCat",
  "Python",
  "Figma",
  "C",
  "GO",
  ".NET",
];

export default function Presentation() {
  return (
    <section className="px-5 lg:px-12">
      <div className="rounded-lg p-6 md:p-24 grid lg:grid-cols-2 backdrop-blur-[100px] bg-[#373737]/[0.4] gap-8 md:gap-16">
        <div className="flex-col gap-2 flex lg:items-start items-center">
          <Image
            src="/profile.jpeg"
            alt=""
            width={685}
            height={904}
            className="sm:max-w-xs rounded-lg md:w-auto w-1/2"
          />
          <p className="text-lg md:text-2xl">Bruno Pistarino</p>
          {/* <div className="bg-white rounded-lg h-96 w-72"></div> */}
        </div>
        <div className="flex flex-col gap-8 md:gap-16 lg:max-w-2xl">
          <div className="flex flex-col gap-6 md:gap-12 text-lg md:text-2xl">
            <p>
              Estudio Ingeniería en Informática y me apasiona crear interfaces
              que resalten por su experiencia de usuario (UX). Soy una persona
              proactiva y emprendedora, siempre aprendiendo nuevas tecnologías y
              aplicándolas en proyectos personales.
            </p>
            <p>
              Me especializo en el desarrollo full stack de páginas web,
              equilibrando habilidades técnicas y creatividad para diseñar
              interfaces intuitivas y atractivas. Además, tengo experiencia en
              el desarrollo de apps tanto móviles como de escritorio para el
              ecosistema Apple.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <p className="text-lg md:text-2xl">Tech Stack</p>
            <div className="grid grid-cols-3 gap-1 md:gap-2">
              {techStack.map((item, x) => (
                <p key={x} className="text-sm md:text-base">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
