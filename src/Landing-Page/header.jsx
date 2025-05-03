import "../css/header.css";
import Logo from "../assets/aerawat.svg";
import person from "../assets/person.svg";
import heart from "../assets/heart.svg";
import chart from "../assets/chart.svg";
import search from "../assets/search.svg";

const Navbar = () => {
  return (
    <>
      <div>
        {/* Top Navigation Links */}
        <div className="bg-[#6a1b1a] text-white py-2 px-4 flex justify-center space-x-6 text-sm new-class">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Explore All Products</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Get in Touch</a>
        </div>

        {/* Main Navbar */}
        <div className="flex flex-wrap items-center justify-between px-4 py-4 border-b">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-32 md:w-40" id="logo" />
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex justify-end items-center space-x-2 mt-4 md:mt-0">
            <img src={search} alt="Search Icon" className="search hidden md:block" />
            <input
              type="text"
              id="search"
              placeholder="Search for Jewellery, Crystals, Gifts..."
              className="w-full md:w-96 p-2 border rounded-lg bg-gray-100 text-sm focus:outline-none"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <img src={person} alt="Person Icon" className="w-6 h-6" />
            <img src={heart} alt="Heart Icon" className="w-6 h-6" />
            <img src={chart} alt="Chart Icon" className="w-6 h-6" />
          </div>
        </div>

        {/* Category Links */}
        <div className="flex flex-wrap justify-center space-x-4 py-3 text-xs md:text-sm new-class2 gap-26">
          <a href="#" className="hover:underline">Fine Jewellery</a>
          <a href="#" className="hover:underline">Shringaar</a>
          <a href="#" className="hover:underline">Kalapatt</a>
          <a href="#" className="hover:underline">Crystals</a>
          <a href="#" className="hover:underline">Wooden Beads</a>
          <a href="#" className="hover:underline">Treasured Gifts</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;