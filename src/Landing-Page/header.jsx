import "../css/header.css";
import Logo from "../assets/aerawat.svg";
import person from "../assets/person.svg";
import heart from "../assets/heart.svg";
import chart from "../assets/chart.svg";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="bg-[#6a1b1a] text-white py-2 px-4 flex justify-center space-x-6 new-class">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Explore All Products</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Get in Touch</a>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-12 h-12" id="logo" />
          </div>

          <div className="flex-1 flex justify-center">
            <input
              type="text"
              id="search"
              placeholder="Search"
              className="w-1/3 p-2 border rounded-lg bg-gray-100 text-sm focus:outline-none"
            />
          </div>

          <div className="flex items-center space-x-7">
            <img src={person} alt="Person Icon" className="w-6 h-6" />
            <img src={heart} alt="Heart Icon" className="w-6 h-6" />
            <img src={chart} alt="Chart Icon" className="w-6 h-6" />
          </div>
        </div>

        <div className="flex justify-center space-x-50 py-3 text-sm border-b-1">
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