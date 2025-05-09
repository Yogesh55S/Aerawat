import { useEffect, useState } from "react";
import Frame from "../assets/Frame.png";
import "../css/content.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("http://localhost:5001/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  const handleProductList = (product) => {
    navigate(`/product/${product._id}`)

  };

  const handleAddToRecentlyViewed = (product) => {
    fetch("http://localhost:5001/api/recentlyViewed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
      }),
    }).catch((err) =>
      console.error("Failed to add to recently viewed:", err)
    );
  };

  return (
    <div className="py-16 px-12 max-w-screen-xl mx-auto mt-14">
      <div className="mb-4 text-gray-400 text-sm">
        Lorem ipsum dolor sit amet consectetur.
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {products.slice(0, 24).map((product) => (
          <div
            key={product._id}
            className="flex flex-col relative cursor-pointer"
            onClick={() => {
              handleAddToRecentlyViewed(product);
              handleProductList(product);
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-[274px] h-[332px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 botton">
              <span className="block">{product.name}</span>
              <span className="block font-bold">{product.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
    <Link to="/ProductList"><button className="bg-[#7C1D1D] text-white text-sm font-medium h-14 w-56 rounded-md gap-2 hover:bg-[#5d1515] transition flex items-center justify-center">
          View All Products
          <img src={Frame} alt="Frame logo" className="ml-2" />
        </button> </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
