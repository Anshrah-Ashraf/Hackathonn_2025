import Link from "next/link";
import Image from "next/image";

export default function Shop() {
  return (
    <div className="shop-page">
      {/* Banner */}
      <section className="relative text-center text-black font-bold">
        <Image
          src="/shop.jpeg"
          alt="shop"
          className="w-full h-[400px] object-cover opacity-50"
          width={2000}
          height={400}
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-black text-[30px] font-bold">
          Shop
        </h1>
      </section>

      {/* Product Grid */}

      <div className="flex flex-row gap-6 p-5">
        {/* Slytherine */}
        <div className="flex flex-col gap-6 w-full" style={{ paddingLeft: '10px' }}>
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col max-w-[250px]"
            >
              <Image
                src="/Syltherine.png"
                alt="Product"
                className="w-full h-48 object-cover"
                width={300}
                height={200}
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Syltherine
                  </h2>
                  <p className="text-gray-600">Stylish chair</p>
                </div>
                <h3 className="font-bold text-gray-900 mt-2">Rp 2.500.000</h3>
              </div>
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                New
              </span>
            </div>
          ))}
        </div>

        {/* Leviosa*/}
        <div className="flex flex-col gap-6 w-full" style={{ paddingLeft: '10px' }}>
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col max-w-[250px]"
            >
              <Image
                src="/Leviosa.png"
                alt="Product"
                className="w-full h-48 object-cover"
                width={300}
                height={200}
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Leviosa
                  </h2>
                  <p className="text-gray-600">Stylish chair</p>
                </div>
                <h3 className="font-bold text-gray-900 mt-2">Rp 2.500.000</h3>
              </div>
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                New
              </span>
            </div>
          ))}
        </div>

        {/*Lolito */}
        <div className="flex flex-col gap-6 w-full" style={{ paddingLeft: '10px' }}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Link legacyBehavior href="/singleProduct" passHref key={index}>
              <a className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col max-w-[250px]">
                <Image
                  src="/Lolito.png"
                  alt="Product"
                  className="w-full h-48 object-cover"
                  width={300}
                  height={200}
                />
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                      Lolito
                    </h2>
                    <p className="text-gray-600">Luxury Big Sofa</p>
                  </div>
                  <h3 className="font-bold text-gray-900 mt-2">Rp 7.000.000</h3>
                </div>
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  New
                </span>
              </a>
            </Link>
          ))}
        </div>


        {/*Respira*/}

        <div className="flex flex-col gap-6 w-full" style={{ paddingLeft: '10px' }}>
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col max-w-[250px]"
            >
              <Image
                src="/Respira.png"
                alt="Product"
                className="w-full h-48 object-cover"
                width={300}
                height={200}
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Respiro
                  </h2>
                  <p className="text-gray-600">Putdoor bar and stool</p>
                </div>
                <h3 className="font-bold text-gray-900 mt-2">Rp 50.000</h3>
              </div>
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                New
              </span>
            </div>
          ))}
        </div>


      </div>







      {/* Pagination */}
      <div className="text-center mt-8">
        <button className="mx-2 px-4 py-2 border border-gray-300 bg-white hover:bg-gray-100">
          1
        </button>
        <button className="mx-2 px-4 py-2 border border-gray-300 bg-white hover:bg-gray-100">
          2
        </button>
        <button className="mx-2 px-4 py-2 border border-gray-300 bg-white hover:bg-gray-100">
          3
        </button>
        <button className="mx-2 px-4 py-2 border border-gray-300 bg-white hover:bg-gray-100">
          Next
        </button>
      </div>

      {/* Features */}
      <div className="flex justify-around items-center p-5 bg-[#fdf8ef] border-t border-b border-gray-300 mt-8">
        {[
          {
            img: "/trophy.png",
            title: "High Quality",
            desc: "Crafted from top materials",
          },
          {
            img: "/guarantee.png",
            title: "Warranty Protection",
            desc: "Over 2 years",
          },
          {
            img: "/shipping.png",
            title: "Free Shipping",
            desc: "Order over 150$",
          },
          {
            img: "/customer-support.png",
            title: "24/7 Support",
            desc: "Dedicated support",
          },
        ].map((feature, index) => (
          <div key={index} className="text-center max-w-[150px]">
            <Image
              src={feature.img}
              alt={feature.title}
              className="w-[40px] h-[40px] mb-[10px]"
              width={40}
              height={40}
            />
            <h4 className="text-[16px] my-[5px] text-[#333]">{feature.title}</h4>
            <p className="text-[14px] text-[#666]">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
