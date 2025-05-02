
import { FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa';
import Header from '../Landing-Page/header.jsx';
import Footer from '../Landing-Page/Footer.jsx';
import aera from '../assets/aera.png';
const Login = () => {
  return (<>
  
  
    <Header/>
    <div className="min-h-screen flex items-center justify-center bg-white border-t-1">
      <div className="w-full max-w-5xl flex border border-gray-200 shadow-md">
        {/* Left Side - Logo */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-white p-10">
          <img
            src={aera}
            alt="House Of Aerawat"
            className="w-32 mb-4"
          />
          <h1 className="text-4xl font-semibold text-[#6e1a1a]">House Of</h1>
          <h1 className="text-5xl font-bold text-[#6e1a1a]">Aerawat</h1>
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 p-10 border-l border-gray-300">
          <h2 className="text-2xl font-bold mb-6">Log in to your Account</h2>

          {/* Google Login */}
          <button className="w-full flex items-center justify-center border border-black py-3 mb-6 text-black font-semibold hover:bg-gray-100 transition">
            <FaGoogle className="mr-3" />
            Using Google Account
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-sm text-gray-500">or continue with</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          {/* Email Field */}
          <div className="flex items-center bg-gray-100 p-3 mb-4">
            <FaEnvelope className="text-gray-500 mr-3" />
            <input
              type="email"
              placeholder="joesmith1234@gmail.com"
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center bg-gray-100 p-3 mb-2">
            <FaLock className="text-gray-500 mr-3" />
            <input
              type="password"
              placeholder="**********"
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#6e1a1a] text-white py-3 font-semibold hover:bg-[#5c1616] transition">
            Submit
          </button>

          {/* Sign Up */}
          <p className="text-sm text-center mt-4 text-gray-600">
            New to Aerawat?{' '}
            <a href="#" className="text-[#6e1a1a] font-semibold hover:underline">
              Sign up now.
            </a>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
 </> );
};

export default Login;
