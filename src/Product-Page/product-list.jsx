import { useState } from "react";
import productsData from "../data/product.json";
import Footer from "../Landing-Page/Footer";
import "../css/product.css";
import Navbar from "../Landing-Page/header";
const sizes = ["4 inches", "5 inches", "6 inches", "7 inches"];

const ProductList = () => {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(7000);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); 

  const filteredProducts = productsData
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => p.price <= price)
    .filter((p) => selectedSizes.length === 0 || selectedSizes.includes(p.size))
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      if (sortOrder === "highToLow") return b.price - a.price;
      return 0;
    });

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <>
   <Navbar/>
    <div className="flex p-10 gap-6 bg-[#ffff] ">
      <aside className=" bg-white p-6 w-[187] h-[405]">
        <h2 className="font-bold mb-4">FILTERS</h2>

        <div className="mb-6">
          <label className="text-sm font-medium block mb-2">Search</label>
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border px-3 py-1.5 rounded text-sm"
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium block mb-2">Price</label>
          <input
            type="range"
            min={1000}
            max={7000}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full accent-[#6a1b1a]"
          />
          <div className="flex justify-between text-xs mt-1 text-gray-600">
            <span>₹1,000</span>
            <span>₹7,000</span>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium block mb-2">Size</label>
          {sizes.map((size) => (
            <div key={size} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={selectedSizes.includes(size)}
                onChange={() => toggleSize(size)}
                className="mr-2"
              />
              <span className="text-sm">{size}</span>
            </div>
          ))}
        </div>
      </aside>

      <main className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">All Products</h2>
          <select
            className="px-2 py-1 text-sm"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value=""> Default</option>
            <option value="lowToHigh">Sort: Low to High</option>
            <option value="highToLow">Sort: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden border h-[385px] w-[294px]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 productdetails">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="text-xs ">{product.size}</p>
                  <p className="font-bold mt-2 ">₹{product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products match your filters.
            </p>
          )}
        </div>
      </main>
    </div> 
    <Footer/>
    </>
  );
};

export default ProductList;
