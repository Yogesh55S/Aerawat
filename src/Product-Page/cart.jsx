import { useState, useEffect } from "react";


const CartPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch cart data from the backend
    const fetchCartData = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/cart");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Unexpected data format:", data);
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  const handleQtyChange = (id, newQty) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, qty: newQty } : product
      )
    );
  };

  const total = products.reduce((sum, item) => sum + (item.price || 0) * (item.qty || 1), 0);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="p-6 md:p-12 bg-white h-[728px] w-[1177px] mx-auto mt-9">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Left: Cart items */}
          <div className="md:col-span-3 space-y-6">
            {products.map((product) => (
              <div key={product.id} className="flex items-start gap-4 border-b pb-4">
                <input type="checkbox" className="mt-2" aria-label={`Select ${product.title}`} />
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h2 className="font-semibold">{product.title || "Unnamed Product"}</h2>
                  <div className="flex items-center gap-2 my-2">
                    <label htmlFor={`qty-${product.id}`}>Qty:</label>
                    <select
                      id={`qty-${product.id}`}
                      className="border rounded px-2 py-1"
                      value={product.qty}
                      onChange={(e) => handleQtyChange(product.id, parseInt(e.target.value))}
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <button className="hover:underline">Delete</button>
                    <button className="hover:underline">Move to Wishlist</button>
                    <button className="hover:underline">Share</button>
                  </div>
                </div>
                <div className="text-right font-semibold text-lg">
                  ₹{((product.price || 0) * (product.qty || 1)).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Summary */}
          <div className="p-4">
            <div className="text-sm mb-4">
              <p>
                <span className="text-gray-600">Subtotal ({products.length} items):</span>{" "}
                <span className="font-semibold text-lg">₹{total.toLocaleString()}</span>
              </p>
            </div>
            <button className="w-full bg-[#661c1c] text-white py-2 px-4 rounded mt-2 hover:bg-[#4d1212]">
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
