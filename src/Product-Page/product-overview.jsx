import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import "../css/product.css";
import RecentlyViewed from "../Landing-Page/content5";
import { FaPlus } from "react-icons/fa6";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5001/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/products/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product details");
      }
      const product = await response.json();

      if (!product || !product._id) {
        throw new Error("Invalid product data received");
      }

      const cartResponse = await fetch("http://localhost:5001/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product._id,
          name: product.name,
          price: product.price,
          image: product.images,
          quantity: quantity,
        }),
      });

      if (!cartResponse.ok) {
        const errorData = await cartResponse.json();
        throw new Error(errorData.message || "Failed to add product to cart");
      }

      alert("Product added to cart successfully!");
      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert(error.message || "An error occurred while adding the product to the cart. Please try again.");
    }
  };

  if (!product) return <div className="p-10 text-center">Loading...</div>;
  return (
    <>
      <div className="container mx-auto p-8 mt-20 ">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative w-full">
              {product.images && product.images[selectedImage] && (
                <img
                  src={product.images[selectedImage]}
                  alt="Main"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              )}
              {product.images &&
                product.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`thumb-${idx}`}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-32 h-32 md:w-24 md:h-24 border-2 rounded-lg cursor-pointer  ${
                      selectedImage === idx ? "border-red-600" : "border-gray-300"
                    }`}
                  />
                ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-2xl text-red-700 mt-4">{product.price.toLocaleString()}</p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-700">Product Description</h3>
              <p className="text-gray-600 mt-2 leading-relaxed"></p>
            </div>

            {/* Quantity Selector */}
            <div className="mt-6 flex items-center">
              <label className="font-semibold text-gray-700 mr-4">Quantity:</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                {[1, 2, 3, 4, 5].map((q) => (
                  <option key={q}>{q}</option>
                ))}
              </select>
            </div>

            {/* Wishlist and Add to Cart Buttons */}
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <button className="flex-1 border border-gray-400 py-3 px-6 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                🤍 Add to Wishlist
              </button>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#6a1b1a] text-white py-3 px-6 rounded-lg hover:bg-[#704443] transition flex items-center justify-center gap-2"
              >
                🛒 Add to Cart
              </button>
            </div>

            {/* Dropdown Sections */}
            <div className="mt-10 space-y-4 border-t-1 border-gray-300 pt-3 ">
              <details className="group">
                <summary className="font-medium text-gray-800 cursor-pointer flex justify-between items-center border-b-1 border-gray-300 pb-3">
                  Buying Options
                  <span className="group-open:rotate-45 transform transition-transform">
                    <FaPlus />
                  </span>
                </summary>
                <p className="text-gray-600 mt-2 pl-4  border-b-1 border-gray-300 pb-3">
                  Choose from EMI or cash on delivery.
                </p>
              </details>
              <details className="group">
                <summary className="font-medium text-gray-800 cursor-pointer flex justify-between items-center  border-b-1 border-gray-300 pb-3">
                  Shipping & Return Policy
                  <span className="group-open:rotate-45 transform transition-transform">
                    <FaPlus />
                  </span>
                </summary>
                <p className="text-gray-600 mt-2 pl-4  border-b-1 border-gray-300 pb-3">
                  Free returns within 10 days.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
      <RecentlyViewed />
    </>
  );
};

export default ProductDetail;