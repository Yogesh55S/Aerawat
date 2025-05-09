import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/product.css";
import RecentlyViewed from "../Landing-Page/content5";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        alert("Failed to load product details. Please try again.");
      }
    };
   
    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const cartResponse = await fetch("http://localhost:5001/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: quantity,
        }),
      });

      if (!cartResponse.ok) {
        const errorData = await cartResponse.json();
        throw new Error(errorData.error || "Failed to add product to cart");
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
      <div className="container mx-auto p-8 mt-20">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative w-full">
              {product.image && (
                <img
                  src={product.image}
                  alt="Main"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-2xl text-red-700 mt-4">
              ₹{(product.price || 0).toLocaleString()}
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-700">Product Description</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">{product.description}</p>
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
          </div>
        </div>
      </div>
      <RecentlyViewed />
    </>
  );
};

export default ProductDetail;