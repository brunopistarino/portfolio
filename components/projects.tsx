"use client";

import { useState } from "react";

const projects = [
  {
    name: "InClass iOS APP",
    image: "",
    url: "",
    stack: ["Swift", "Xcode", "RevenueCat"],
  },
  {
    name: "InClass Landing Page",
    image: "",
    url: "",
    stack: ["NextJS", "TailwindCSS"],
  },
  //   {
  //     name: "Fake Pain",
  //     image: "",
  //     url: "",
  //   },
  {
    name: "Distri-Raf",
    image: "",
    url: "",
    stack: ["NextJS", "TypeScript", "TailwindCSS", "Supabase"],
  },
  {
    name: "numatch",
    image: "",
    url: "",
    stack: ["Vite", "SASS"],
  },
];

export default function Projects() {
  const [item, setItem] = useState(projects[0]);
  return (
    <section className="mb-24 mt-64 px-12 flex flex-col gap-24">
      <p className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl">
        MIS PROYECTOS
      </p>
      <div className="grid grid-cols-[4fr_2fr] gap-16">
        <div className="grid grid-cols-2 gap-4">
          {projects.map((item, x) => (
            <div
              key={x}
              className="bg-white text-black aspect-square rounded-lg flex items-center justify-center"
              onMouseOver={() => setItem(item)}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div>
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
