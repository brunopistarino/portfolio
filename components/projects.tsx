"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    name: "InClass iOS APP",
    image: "/project-inclass.png",
    url: "https://apps.apple.com/us/app/inclass-school-planner/id6462791378",
    stack: ["Swift", "Xcode", "RevenueCat"],
  },
  {
    name: "Distri-Raf eCommerce",
    image: "/project-distriraf.png",
    url: "https://www.distriraf.com.ar/",
    stack: ["NextJS", "TypeScript", "TailwindCSS", "Supabase"],
  },
  {
    name: "InClass Landing Page",
    image: "/project-landing.png",
    url: "https://inclass.ar/",
    stack: ["NextJS", "TailwindCSS"],
  },
  {
    name: "numatch juego de memoria",
    image: "/project-numatch.png",
    url: "https://numatch.vercel.app/",
    stack: ["Vite", "SASS"],
  },
  //   {
  //     name: "Fake Pain",
  //     image: "",
  //     url: "",
  //   },
];

export default function Projects() {
  const [item, setItem] = useState(projects[0]);
  return (
    <section className="mb-24 mt-32 md:mt-64 px-5 md:px-12 flex flex-col gap-12 md:gap-24">
      <p className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl">
        MIS PROYECTOS
      </p>
      <div className="grid lg:grid-cols-[4fr_2fr] gap-16">
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((item, x) => (
            <div key={x} className="group">
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black aspect-square rounded-lg flex items-center justify-center overflow-hidden"
                onMouseOver={() => setItem(item)}
              >
                <Image
                  src={item.image}
                  alt=""
                  width={1080}
                  height={1080}
                  className="hover:scale-105 transition-all"
                />
              </Link>
              <p className="mt-2 mb-1 block lg:hidden group-hover:underline underline-offset-2 text-lg">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          <div className="sticky top-8 flex flex-col gap-4">
            <p className="text-5xl">{item.name}</p>
            <div className="flex gap-4 flex-wrap">
              {item.stack?.map((item, x) => (
                <p key={x} className="bg-[#373737]/[0.4] px-4 py-2 rounded">
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
