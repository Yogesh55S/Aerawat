import "../css/responsive.css";
import image from "../assets/img.jpg";
import Navbar from "../Landing-Page/header";
import Footer from "../Landing-Page/Footer";
import RecentlyViewed from "../Landing-Page/content5";
const OrderSummary = () => {
  return (
    <>
    <Navbar/>
      <div className="h-[618px] bg-white p-6 md:p-12 flex justify-center">
        <div className="flex flex-col md:flex-row gap-12 items-center w-full max-w-6xl">
          <div className="space-y-8 md:w-2/3">
            <div className="border rounded p-4 w-[803px] h-[144px]">
              <h2 className="font-semibold text-lg mb-1">Your order has been confirmed.</h2>
              <p>
                We have accepted your order and we are getting it ready.
                A confirmation mail has been sent to <span className="font-semibold">joesmith1234@gmail.com</span>.
              </p>
            </div>

            <div className="border rounded p-4 w-[803px] h-[254px]">
              <h3 className="font-semibold text-lg mb-2">Customer Details</h3>
              <p className="mb-2">
                <span className="font-semibold">Email</span><br />
                joesmith1234@gmail.com
              </p>
              <p>
                <span className="font-semibold">Shipping Address</span><br />
                712, New Colony<br />
                Ghaziabad, Uttar Pradesh<br />
                Pincode: 123456
              </p>
            </div>
          </div>

          {/* Right side (order summary) */}
          <div className="border rounded p-4 space-y-8 w-full md:w-1/3 h-[418px]">
            <h3 className="font-semibold text-lg mb-2">Order Details</h3>

            {/* Thumbnail + total */}
            <div className="flex items-center justify-between">
              <img src={image} alt="main" className="w-16 h-16 md:w-20 md:h-20" />
              <div className="text-right">
                <p className="text-sm text-gray-700">2 items</p>
                <p className="text-[#661c1c] font-semibold text-lg">₹16,256</p>
              </div>
            </div>

            <hr />

            {/* Breakdown */}
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
              <div className="flex justify-between font-semibold text-[#661c1c] pt-2">
                <span>Order Total:</span>
                <span>₹16,256</span>
              </div>
            </div>

            <hr />

            <div className="text-sm flex justify-between">
              <span>Payment Method:</span>
              <span className="font-medium">UPI Payment</span>
            </div>
          </div>
        </div>
      </div>
      <RecentlyViewed/>
      <Footer/>
    </>
  );
};
export default OrderSummary;
