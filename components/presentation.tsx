const techStack = [
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "Supabase",
  "React",
  "SASS",
  "Swift",
  "Xcode",
  //   "RevenueCat",
  "Python",
  "C",
  "GO",
  ".NET",
];

export default function Presentation() {
  return (
    <section className="px-12">
      <div className="rounded-lg p-16 grid grid-cols-2 backdrop-blur-[100px] bg-[#373737]/[0.4]">
        <p></p>
        <div className="flex flex-col gap-8">
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div>
            <p>Tech Stack</p>
            <div className="grid grid-cols-3">
              {techStack.map((item, x) => (
                <div key={x}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
