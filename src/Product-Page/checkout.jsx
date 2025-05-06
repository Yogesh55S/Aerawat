import image from "../assets/img.jpg";
import Navbar from "../Landing-Page/header";
import Footer from "../Landing-Page/Footer";
const ShippingPage = () => {
  return (
    <>
    <Navbar/>
      <div className="w-full max-w-screen-xl h-[759px] mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-6 bg-white">
        <form className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <h2 className="col-span-2 text-2xl font-semibold mb-4">Shipping Details</h2>

          <div>
            <label className="block font-semibold mb-1">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="E.g, Joe"
              className="w-full bg-gray-200  px-4 py-2 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="E.g, Smith"
              className="w-full  bg-gray-200  px-4 py-2 placeholder-gray-400"
            />
          </div>

          <div className="col-span-2">
            <label className="block font-semibold mb-1">
              Address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="E.g, 712, New Colony"
              className="w-full  bg-gray-200  px-4 py-2 placeholder-gray-400"
            />
          </div>

          <div className="col-span-2">
            <label className="block font-semibold mb-1">
              Landmark<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="E.g, near Huda Park"
              className="w-full  bg-gray-200  px-4 py-2 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="E.g, Ghaziabad"
              className="w-full  bg-gray-200  px-4 py-2 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Country<span className="text-red-500">*</span>
            </label>
            <select className="w-full bg-gray-200 px-4 py-2">
              <option>India</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              State<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="E.g, Uttar Pradesh"
              className="w-full  bg-gray-200  px-4 py-2 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Postal Code<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="E.g, 123456"
              className="w-full  bg-gray-200  px-4 py-2 placeholder-gray-400"
            />
          </div>

          <div className="col-span-2">
            <label className="block font-semibold mb-1">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="E.g, (+91 99887-76655)"
              className="w-full  bg-gray-200  px-4 py-2 placeholder-gray-400"
            />
          </div>
        </form>

        {/* Summary */}
        <div className="w-full lg:w-[420px] space-y-6">
          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex gap-4 p-3 bg-gray-50 rounded">
              <img
                src={image}
                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
                alt="item"
              />
              <div className="flex-1">
                <p className="font-semibold">Gold-Plated Chain-Set of 3</p>
                <p className="text-sm text-gray-500">Fine Jewellery</p>
                <div className="mt-2 flex items-center gap-2">
                  <label htmlFor="qty1">Qty:</label>
                  <select id="qty1" className="border px-2 py-1 rounded">
                    <option>1</option>
                  </select>
                </div>
              </div>
              <button className="text-gray-500 hover:text-black text-xl">🗑️</button>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4 p-3 bg-gray-50 rounded">
              <img
                src={image}
                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
                alt="item"
              />
              <div className="flex-1">
                <p className="font-semibold">Wooden Beads Chain-Set of 3</p>
                <p className="text-sm text-gray-500">Wooden Beads</p>
                <div className="mt-2 flex items-center gap-2">
                  <label htmlFor="qty2">Qty:</label>
                  <select id="qty2" className="border px-2 py-1 rounded">
                    <option>1</option>
                  </select>
                </div>
              </div>
              <button className="text-gray-500 hover:text-black text-xl">🗑️</button>
            </div>
          </div>

          {/* Price Summary */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Items:</span>
              <span>₹16,296</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges:</span>
              <span>₹80</span>
            </div>
            <div className="flex justify-between">
              <span>Discount:</span>
              <span>-₹120</span>
            </div>
            <div className="flex justify-between font-semibold text-lg pt-2">
              <span>Order Total:</span>
              <span>₹16,256</span>
            </div>
          </div>

          <button className="w-full bg-[#661c1c] text-white py-3 rounded hover:bg-[#4d1212] font-medium">
            Proceed to Pay
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ShippingPage;