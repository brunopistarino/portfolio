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
    stack: ["NextJS", "TailwindCSS", "Supabase"],
  },
  {
    name: "numatch",
    image: "",
    url: "",
    stack: ["Vite", "SASS"],
  },
];

export default function Projects() {
  return (
    <section className="p-12">
      <p className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl">
        MIS PROYECTOS
      </p>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          {projects.map((item, x) => (
            <div key={x} className="bg-white text-black aspect-square">
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div>
          <p>InClass iOS APP</p>
        </div>
      </div>
    </section>
  );
}
