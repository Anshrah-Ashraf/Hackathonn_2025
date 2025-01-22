import Link from "next/link";
import Image from "next/image";

export default function Cart() {
  return (
    <div className="cart-container bg-[#fdf8ef] p-5 text-[#333] font-sans">
      <main>
        <div className="relative">
          <Image
            src="/shop.jpeg"
            alt="shop"
            className="w-full h-[400px] object-cover opacity-50"
            width={2000}
            height={400}
          />
          <a
            href="#"
            className="absolute inset-0 flex items-center justify-center text-black text-[30px] font-bold"
          >
            Cart
          </a>
        </div>

        <div className="cart-content grid grid-cols-3 gap-5 mt-10">
          {/* Cart Table */}
          <div className="col-span-2">
            <table className="cart-table w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-[#f8f4eb]">
                <tr>
                  <th className="text-left p-4">Product</th>
                  <th className="text-left p-4">Price</th>
                  <th className="text-left p-4">Quantity</th>
                  <th className="text-left p-4">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="product-info flex items-center p-4">
                    <Image
                      src="/sofa cart.png"
                      alt="Asgaard Sofa"
                      width={80}
                      height={60}
                      className="mr-4"
                    />
                    <span>Asgaard Sofa</span>
                  </td>
                  <td className="p-4">Rs. 250,000.00</td>
                  <td className="p-4">
                    <input
                      type="number"
                      value="1"
                      className="quantity-input border border-gray-300 w-12 text-center"
                    />
                  </td>
                  <td className="p-4">Rs. 250,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="cart-totals bg-white border border-gray-300 rounded-lg p-5">
            <h3 className="text-xl font-bold mb-4">Cart Totals</h3>
            <div className="totals-line flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="totals-line flex justify-between mb-4">
              <span>Total</span>
              <span className="text-xl font-bold">Rs. 250,000.00</span>
            </div>

            <Link legacyBehavior href="/checkout" passHref>
              <button className="checkout-btn bg-[#f9d02c] text-white px-6 py-2 rounded-lg hover:bg-[#e0ba25] w-full">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="mt-10">
        <p className="text-black font-extrabold bg-slate-200 text-center p-3">
          2024 Furniro
        </p>
      </footer>

      <div className="text-center mt-5">
        <button className="m-1 px-3 py-1 border border-gray-300 bg-white hover:bg-gray-200">
          1
        </button>
        <button className="m-1 px-3 py-1 border border-gray-300 bg-white hover:bg-gray-200">
          2
        </button>
        <button className="m-1 px-3 py-1 border border-gray-300 bg-white hover:bg-gray-200">
          3
        </button>
        <button className="m-1 px-3 py-1 border border-gray-300 bg-white hover:bg-gray-200">
          Next
        </button>
      </div>

      <div className="flex justify-around items-center p-5 bg-[#fdf8ef] border-t border-b border-gray-300 mt-10">
        <div className="text-center max-w-[200px]">
          <Image
            src="/trophy 1.png"
            alt="High Quality"
            className="w-[40px] h-[40px] mb-2"
            width={40}
            height={40}
          />
          <h4 className="text-[16px] my-1 text-[#333]">High Quality</h4>
          <p className="text-[14px] text-[#666]">crafted from top materials</p>
        </div>
        <div className="text-center max-w-[200px]">
          <Image
            src="/guarantee.png"
            alt="Warranty Protection"
            className="w-[40px] h-[40px] mb-2"
            width={40}
            height={40}
          />
          <h4 className="text-[16px] my-1 text-[#333]">Warranty Protection</h4>
          <p className="text-[14px] text-[#666]">Over 2 years</p>
        </div>
        <div className="text-center max-w-[200px]">
          <Image
            src="/shipping.png"
            alt="Free Shipping"
            className="w-[40px] h-[40px] mb-2"
            width={40}
            height={40}
          />
          <h4 className="text-[16px] my-1 text-[#333]">Free Shipping</h4>
          <p className="text-[14px] text-[#666]">Order over 150 $</p>
        </div>
        <div className="text-center max-w-[200px]">
          <Image
            src="/customer-support.png"
            alt="24/7 Support"
            className="w-[40px] h-[40px] mb-2"
            width={40}
            height={40}
          />
          <h4 className="text-[16px] my-1 text-[#333]">24 / 7 Support</h4>
          <p className="text-[14px] text-[#666]">Dedicated support</p>
        </div>
      </div>
    </div>
  );
}
