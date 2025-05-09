import { useEffect, useState } from "react";
import "../css/content.css";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [availableInches, setAvailableInches] = useState([]);
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(70000);
  const [selectedInches, setSelectedInches] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5001/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const inches = [...new Set(data.map((p) => p.inches).filter(Boolean))];
        setAvailableInches(inches.sort((a, b) => a - b));
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  const toggleInch = (inch) => {
    setSelectedInches((prev) =>
      prev.includes(inch) ? prev.filter((i) => i !== inch) : [...prev, inch]
    );
  };

  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => p.price <= price)
    .filter((p) => selectedInches.length === 0 || selectedInches.includes(p.inches))
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      if (sortOrder === "highToLow") return b.price - a.price;
      return 0;
    });

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6 bg-white min-h-screen">
      {/* Sidebar Filters */}
      <aside className="bg-white p-4 w-full md:w-[187px] border border-gray-200">
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
            max={70000}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full accent-[#6a1b1a]"
          />
          <div className="flex justify-between text-xs mt-1 text-gray-600">
            <span>₹1,000</span>
            <span>₹70,000</span>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium block mb-2">Inches</label>
          {availableInches.map((inch) => (
            <div key={inch} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={selectedInches.includes(inch)}
                onChange={() => toggleInch(inch)}
                className="mr-2"
              />
              <span className="text-sm">{inch} inches</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Product Area */}
      <main className="flex-1">
        {/* Top: Heading + Sort */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          <h2 className="text-xl font-semibold">All Products</h2>
          <select
            className="px-3 py-2 border border-gray-300 rounded text-sm w-full sm:w-auto"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        {/* Product Cards (same UI as content4 + inches) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="flex flex-col relative cursor-pointer"
                onClick={() => navigate(`/product/${product._id}`)}
              >
                <img
                  src={product.image || "/images/default.jpg"}
                  alt={product.name}
                  className="w-[274px] h-[332px] object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 botton bg-white bg-opacity-80 px-3 py-2 w-full">
                  <span className="block text-sm font-semibold text-white">{product.name}</span>
                  <span className="block text-xs text-white">{product.inches} inches</span>
                  <span className="block font-bold text-md text-white">₹{product.price}</span>
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
  );
};

export default ProductList;
