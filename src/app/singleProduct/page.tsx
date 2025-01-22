import Image from "next/image";
import Link from "next/link";

export default function SingleProduct() {
  return (
    <div className="container mx-auto p-6">
      <main>
        {/* Breadcrumbs */}
        <div className="breadcrumbs flex space-x-2 text-gray-600 text-lg mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span>&gt;</span>
          <Link href="/shop" className="hover:underline">Shop</Link>
          <span>&gt;</span>
          <span className="font-semibold">Asgaard Sofa</span>
        </div>

        {/* Product Details Section */}
        <section className="product-details flex flex-col lg:flex-row gap-8 mb-12">
          {/* Product Images */}
          <div className="product-images flex-1">
            <Image
              src="/Asgaard sofa 3.png"
              alt="Asgaard Sofa"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
            <div className="flex mt-4 gap-4">
              <Image
                src="/Asgaard sofa 3.png"
                alt="Thumbnail 1"
                width={100}
                height={100}
                className="rounded-md cursor-pointer"
              />
              <Image
                src="/Asgaard sofa 3.png"
                alt="Thumbnail 2"
                width={100}
                height={100}
                className="rounded-md cursor-pointer"
              />
              <Image
                src="/Asgaard sofa 3.png"
                alt="Thumbnail 3"
                width={100}
                height={100}
                className="rounded-md cursor-pointer"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info flex-1">
            <h2 className="text-3xl font-bold mb-4">Asgaard Sofa</h2>
            <p className="text-xl text-gray-800 font-semibold mb-2">Rs. 250,000.00</p>
            <p className="text-sm text-yellow-500 mb-4">⭐⭐⭐⭐⭐ (5 Customer Reviews)</p>
            <p className="text-gray-600 mb-4">
              Setting the bar as one of the loudest speakers in its class, this sofa is a compact, stout-hearted hero.
            </p>

            <div className="color-options mb-4">
              <span className="text-gray-700">Color:</span>
              <div className="flex gap-2 mt-2">
                <button
                  className="w-6 h-6 rounded-full border"
                  style={{ background: "blue" }}
                ></button>
                <button
                  className="w-6 h-6 rounded-full border"
                  style={{ background: "black" }}
                ></button>
                <button
                  className="w-6 h-6 rounded-full border"
                  style={{ background: "yellow" }}
                ></button>
              </div>
            </div>

            <div className="actions mt-6">
              <Link href="/cart" passHref>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="description mb-12">
          <h3 className="text-2xl font-semibold mb-4">Description</h3>
          <p className="text-gray-600 leading-relaxed">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.
          </p>
        </section>

        {/* Related Products Section */}
        <section className="related-products">
          <h3 className="text-2xl font-semibold mb-4">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Syltherine", price: "Rp 2,500,000", img: "/related image 1.png" },
              { name: "Leviosa", price: "Rp 2,500,000", img: "/related image 2.png" },
              { name: "Lolito", price: "Rp 7,000,000", img: "/related image 3.png" },
              { name: "Respira", price: "Rp 500,000", img: "/related image 4.png" },
            ].map((product, index) => (
              <div
                key={index}
                className="card shadow-md border rounded-lg p-4 text-center"
              >
                <Image
                  src={product.img}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="mx-auto"
                />
                <p className="text-lg font-semibold mt-2">{product.name}</p>
                <p className="text-sm text-gray-500">{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>© 2024 Furniro. All Rights Reserved.</p>
      </footer>
    </div>
  );
}