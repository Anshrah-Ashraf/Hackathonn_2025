import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white pb-20 pt-5">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Text Content */}
        <div className="text-container text-center lg:text-left lg:max-w-lg">
          <div className="tag text-sm uppercase text-gray-500 mb-2">New Arrival</div>
          <h1 className="title text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Discover Our New Collection
          </h1>
          <p className="description mt-4 text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="cta-button mt-6 inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 text-center">
            Buy Now
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-10 lg:mt-0 flex justify-center items-center">
          <Image
            src="/chair and plant.jpeg"
            alt="Chair and Plant"
            className="rounded-lg shadow-lg"
            width={600}
            height={400}
          />
        </div>
      </main>
    </div>
  );
}
