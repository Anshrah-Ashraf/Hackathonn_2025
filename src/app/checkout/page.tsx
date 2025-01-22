import Image from "next/image";

export default function BillingDetails() {
  return (
    <div className="bg-gray-100 py-8 sm:py-12 lg:py-16">

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
                  CheckOut
                </a>
              </div>
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Section: Billing Details */}
        <div className="lg:col-span-2 bg-white p-8 shadow-md rounded-md">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Billing Details</h1>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                Company Name (optional)
              </label>
              <input
                type="text"
                id="company-name"
                name="company-name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country / Region
              </label>
              <select
                id="country"
                name="country"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>United States</option>
                <option>UK</option>
                <option>Pakistan</option>
                <option>India</option>
              </select>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Street Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  Town / City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                  Province
                </label>
                <select
                  id="province"
                  name="province"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Western Province</option>
                  <option>Eastern Province</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="zip-code" className="block text-sm font-medium text-gray-700">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip-code"
                  name="zip-code"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>

        {/* Right Section: Order Summary */}
        <div className="bg-white p-8 shadow-md rounded-md">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Your Order</h2>
          <div className="border-b border-gray-300 pb-4">
            <div className="flex justify-between mb-2">
              <span>Product Name</span>
              <span>$250.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>$250.00</span>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-600">
              Your personal data will be used to process your order and for other purposes described in our
              <a href="#" className="text-indigo-600"> privacy policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}