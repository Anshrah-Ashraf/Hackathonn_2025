import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16">

      <div className="pb-4">
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
          Contact
        </a>
      </div>

      <div className="w-2000px mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center p-5">Get In Touch With Us</h1>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="mt-8 space-y-4">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Address</h2>
            <p className="text-gray-500">235 8th St Avenue, New York NY10000, United States</p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-900">Phone</h2>
            <p className="text-gray-500">
              Mobile: (+64) 546-0789<br />
              Hotline: (+64) 456-0789
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-900">Working Time</h2>
            <p className="text-gray-500">
              Monday-Friday: 9:00 - 22:00<br />
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>
      </div>

      <footer>
        <p className="text-black font-extrabold bg-slate-200"> 2024 Furniro</p>
      </footer>

      <div className="text-center mt-[20px]">
        <button className="m-[0_5px] p-[5px_10px] border border-[#ddd] bg-white cursor-pointer hover:bg-[#ddd]">1</button>
        <button className="m-[0_5px] p-[5px_10px] border border-[#ddd] bg-white cursor-pointer hover:bg-[#ddd]">2</button>
        <button className="m-[0_5px] p-[5px_10px] border border-[#ddd] bg-white cursor-pointer hover:bg-[#ddd]">3</button>
        <button className="m-[0_5px] p-[5px_10px] border border-[#ddd] bg-white cursor-pointer hover:bg-[#ddd]">Next</button>
      </div>

      <div className="flex justify-around items-center p-5 bg-[#fdf8ef] border-t border-b border-gray-300">
        <div className="text-center max-w-[200px]">
          <Image src="/trophy 1.png" alt="High Quality" className="w-[40px] h-[40px] mb-[10px]" width={40} height={40} />
          <h4 className="text-[16px] my-[5px] text-[#333]">High Quality</h4>
          <p className="text-[14px] text-[#666] m-0">crafted from top materials</p>
        </div>
        <div className="feature">
          <Image src="/guarantee.png" alt="Warranty Protection" className="feature-icon" width={40} height={40} />
          <h4 className="text-[16px] my-[5px] text-[#333]">Warranty Protection</h4>
          <p className="text-[14px] text-[#666] m-0">Over 2 years</p>
        </div>
        <div className="feature">
          <Image src="/shipping.png" alt="Free Shipping" className="feature-icon" width={40} height={40} />
          <h4 className="text-[16px] my-[5px] text-[#333]">Free Shipping</h4>
          <p className="text-[14px] text-[#666] m-0">Order over 150 $</p>
        </div>
        <div className="feature">
          <Image src="/customer-support.png" alt="24/7 Support" className="feature-icon" width={40} height={40} />
          <h4 className="text-[16px] my-[5px] text-[#333]">24 / 7 Support</h4>
          <p className="text-[14px] text-[#666] m-0">Dedicated support</p>
        </div>
      </div>
    </div>
  );
}