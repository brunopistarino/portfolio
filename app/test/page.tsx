export default function Page() {
  return (
    <div>
      <div className="h-[800px] bg-red-400"></div>
      <div className="h-[800px] bg-blue-400 grid grid-cols-2">
        <p>hola</p>
        <div className=" h-full">
          <p className="sticky top-8">chau</p>
        </div>
      </div>
      <div className="h-[800px] bg-green-400"></div>
      <div className="h-[800px] bg-yellow-400"></div>
    </div>
  );
}
