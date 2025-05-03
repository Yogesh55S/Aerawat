
import { useState } from 'react';
import axios from 'axios';

import { FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa';
import Header from '../Landing-Page/header.jsx';
import Footer from '../Landing-Page/Footer.jsx';
import aera from '../assets/aera.svg';
const Login = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const endpoint = isLogin ? 'login' : 'signup';
      try {
        const res = await axios.post(`http://localhost:5001/api/auth/${endpoint}`, {
          email, password
        });
        alert(res.data.message || 'Success');
      } catch (err) {
        alert(err.response.data.message || 'Error');
      }
    };
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="min-h-screen flex items-center justify-center bg-white border-t-1">
          <div className="w-full max-w-5xl flex">
            <div className="w-1/2 flex flex-col items-center justify-center bg-white p-10">
              <img
                src={aera}
                alt="House Of Aerawat"
                className="w-[400] mb-4 h-[398]"
              />
            </div>

            <div className="w-1/2 p-10 border-l-2 border-gray-300">
              <h2 className="text-2xl font-bold mb-6 text-center">
                {isLogin ? 'Log in to your Account' : 'Create a New Account'}
              </h2>
              <button className="w-full flex items-center justify-center border border-black py-3 mb-6 text-black font-semibold hover:bg-gray-100 transition">
                <FaGoogle className="mr-3" />
                {isLogin ? 'Using Google Account' : 'Sign up with Google'}
              </button>

              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300" />
                <span className="mx-4 text-sm text-gray-500">
                  or {isLogin ? 'continue with' : 'sign up with'}
                </span>
                <div className="flex-grow border-t border-gray-300" />
              </div>

              <div className="flex items-center bg-gray-100 p-3 mb-4">
                <FaEnvelope className="text-gray-500 mr-3" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="joesmith1234@gmail.com"
                  className="w-full bg-transparent outline-none text-sm"
                />
              </div>

              <div className="flex items-center bg-gray-100 p-3 mb-2">
                <FaLock className="text-gray-500 mr-3" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-transparent outline-none text-sm"
                />
              </div>

              {isLogin ? (
                <div className="text-right mb-6">
                  <a href="#" className="text-sm text-gray-500 hover:underline">
                    Forgot Password?
                  </a>
                </div>
              ) : (
                <div className="flex items-center bg-gray-100 p-3 mb-4">
                  <FaLock className="text-gray-500 mr-3" />
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full bg-transparent outline-none text-sm"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#6e1a1a] text-white py-3 font-semibold hover:bg-[#5c1616] transition"
              >
                {isLogin ? 'Log In' : 'Sign Up'}
              </button>
              <p className="text-sm text-center mt-4 text-gray-600">
                {isLogin ? (
                  <>
                    New to Aerawat?{' '}
                    <a
                      href=""
                      onClick={() => setIsLogin(false)}
                      className="text-[#6e1a1a] font-semibold hover:underline"
                    >
                      Sign up now.
                    </a>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <a
                      href="#"
                      onClick={() => setIsLogin(true)}
                      className="text-[#6e1a1a] font-semibold hover:underline"
                    >
                      Log in here.
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Login;
