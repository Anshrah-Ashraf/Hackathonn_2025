import React from 'react';
import Image from 'next/image';

export default function BeautifulRooms() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Our designer&apos;s carefully curate a list of beautiful projects that will inspire you.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center">
          {/* First Image */}
          <div className="relative">
            <Image
              className="rounded-lg shadow-lg"
              src="/50 1.png"
              alt="Bedroom Inspiration 1"
              width={500}
              height={300}
            />
          </div>

          {/* Second Image */}
          <div className="relative">
            <Image
              className="rounded-lg shadow-lg"
              src="/50 2.png"
              alt="Bedroom Inspiration 2"
              width={500}
              height={100}
            />
          </div>
        </div>

        {/* Explore More Button */}
        <div className="mt-8 flex justify-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}
