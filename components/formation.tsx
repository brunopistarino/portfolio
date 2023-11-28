"use client";

import Link from "next/link";
import { useState } from "react";

const fomation = [
  {
    name: "UCSE",
    type: "Universidad",
    // year: "2022 - 2026",
    year: "2026",
    href: "http://www.ucse.edu.ar/",
    image: "/UCSE.jpg",
  },
  {
    name: "CS50P",
    type: "Curso",
    year: "2022",
    href: "https://pll.harvard.edu/course/cs50s-introduction-programming-python",
    image: "/CS50P.png",
  },
  {
    name: "CS50X",
    type: "Curso",
    year: "2022",
    href: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
    image: "/CS50X.png",
  },
  {
    name: "ITBA",
    type: "Curso",
    year: "2022",
    href: "https://innovacion.itba.edu.ar/educacion-ejecutiva/tic/full-stack-developer/",
    image: "/ITBA.jpeg",
  },
  {
    name: "GOOGLE UX",
    type: "Curso",
    year: "2022",
    href: "https://grow.google/certificates/ux-design/",
    image: "/GOOGLEUX.jpg",
  },
  {
    name: "EETP460",
    type: "Secundaria",
    year: "2021",
    href: "https://www.eet460rafaela.edu.ar/informatica",
    image: "",
  },
  {
    name: "CS50W",
    type: "Curso",
    year: "2021",
    href: "https://pll.harvard.edu/course/cs50s-web-programming-python-and-javascript",
    image: "/CS50W.png",
  },
];

export default function Formation() {
  const [image, setImage] = useState("");

  return (
    <section className="px-5 md:px-12 py-6 md:py-12 bg-white flex flex-col gap-20 lg:gap-52 text-[#141212]">
      <p className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl">
        MI FORMACIÓN
      </p>
      <div className="border-b border-black">
        {fomation.map((item, x) => (
          <Link
            className="grid grid-cols-[1fr_minmax(100px,_auto)_minmax(70px,_auto)] lg:grid-cols-[1fr_minmax(30%,_auto)_minmax(20%,_auto)] border-t border-black items-center py-3 group"
            key={x}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseOver={() => setImage(item.image)}
          >
            <p className="text-3xl lg:text-4xl xl:text-5xl group-hover:text-[#47B172]">
              {item.name}
            </p>
            <p className="text-base">{item.type}</p>
            <p className="text-base text-end">{item.year}</p>
          </Link>
        ))}
      </div>
      <img src={image ?? ""} alt="" className="absolute w-72" />
    </section>
  );
}
