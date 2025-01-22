import Image from "next/image";

export default function Browse() {
  return (
    <div className="container mx-auto pb-20">
        <h1 className="text-2xl font-bold mb-6 text-center">Browse The Range</h1>

      <main className="main">
        <div className="grid grid-cols-3 gap-6">
          <div className="card shadow-lg border rounded-lg p-4 text-center">
            <Image
              src="/dining.jpg"
              alt="Dining"
              className="w-full h-40 object-cover rounded"
              width={300}
              height={160}
            />
            <h2 className="text-lg font-semibold mt-4">Dining</h2>
          </div>
          <div className="card shadow-lg border rounded-lg p-4 text-center">
            <Image
              src="/living.jpg"
              alt="Living"
              className="w-full h-40 object-cover rounded"
              width={300}
              height={160}
            />
            <h2 className="text-lg font-semibold mt-4">Living</h2>
          </div>
          <div className="card shadow-lg border rounded-lg p-4 text-center">
            <Image
              src="/bedroom.jpg"
              alt="Bedroom"
              className="w-full h-40 object-cover rounded"
              width={300}
              height={160}
            />
            <h2 className="text-lg font-semibold mt-4">Bedroom</h2>
          </div>
        </div>
      </main>
    </div>
  );
}