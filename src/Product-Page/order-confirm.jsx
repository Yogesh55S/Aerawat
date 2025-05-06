import { useEffect, useState } from "react";
import image from "../assets/confirm.jpg";
import Navbar from "../Landing-Page/header";
import Footer from "../Landing-Page/Footer";
export default function OrderConfirmed() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
   <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <img
        src={image}
        alt="Order Confirmed"
        className="w-full max-w-md mb-8"
      />
      <h1 className="text-2xl md:text-3xl font-bold text-[#661c1c] mb-4">
        Your order has been confirmed.
      </h1>
      <p className="text-[#661c1c] text-sm md:text-base max-w-2xl mb-2">
        Your order isn't just a purchase—it's a step toward fair wages, ecological responsibility,
        and the preservation of traditional artistry.
      </p>
      <p className="text-[#661c1c] text-sm mt-4">
        You'll be redirected to your order summary in {countdown} second{countdown !== 1 && "s"}...
      </p>
    </div> 
    <Footer/>
    </>
  );
}
