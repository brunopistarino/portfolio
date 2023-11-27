import Image from "next/image";

const fomation = [
  {
    name: "UCSE",
    type: "Universidad",
    // year: "2022 - 2026",
    year: "2026",
  },
  {
    name: "CS50P",
    type: "Curso",
    year: "2022",
  },
  {
    name: "CS50X",
    type: "Curso",
    year: "2022",
  },
  {
    name: "ITBA",
    type: "Curso",
    year: "2022",
  },
  {
    name: "GOOGLE UX",
    type: "Curso",
    year: "2022",
  },
  {
    name: "EETP460",
    type: "Secundaria",
    year: "2021",
  },
  {
    name: "CS50W",
    type: "Curso",
    year: "2021",
  },
];

export default function Home() {
  return (
    <main className="p-12 bg-white text-[#141212] text-8xl flex flex-col gap-52">
      <p>MI FORMACIÓN</p>
      <div className="border-b border-black">
        {fomation.map((item, x) => (
          <div
            className="grid grid-cols-[1fr_minmax(70px,_auto)] lg:grid-cols-[1fr_minmax(30%,_auto)_minmax(20%,_auto)] border-t border-black items-center py-3"
            key={x}
          >
            <p className="text-5xl">{item.name}</p>
            <p className="text-base">{item.type}</p>
            <p className="text-base text-end">{item.year}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
