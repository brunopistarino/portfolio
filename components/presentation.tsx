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
      <div className="rounded-lg p-24 grid lg:grid-cols-2 backdrop-blur-[100px] bg-[#373737]/[0.4]">
        <div>
          <Image
            src="/profile.jpg"
            alt=""
            width={685}
            height={904}
            className="sm:max-w-xs rounded-lg"
          />
          <p>Bruno Pistarino</p>
          {/* <div className="bg-white rounded-lg h-96 w-72"></div> */}
        </div>
        <div className="flex flex-col gap-16 max-w-2xl">
          <div className="flex flex-col gap-12 text-2xl">
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
          <div className="flex flex-col gap-4">
            <p className="text-2xl">Tech Stack</p>
            <div className="grid grid-cols-3 gap-2">
              {techStack.map((item, x) => (
                <p key={x} className="text-base">
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
