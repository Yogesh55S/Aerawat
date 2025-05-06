import { useState } from "react";
import Navbar from "../Landing-Page/header";
import Footer from "../Landing-Page/Footer";
const productsData = [
  {
    id: 1,
    title: "Gold-Plated Chain-Set of 3",
    price: 5432,
    qty: 1,
    image: "/images/img.jpg",
  },
  {
    id: 2,
    title: "Gold-Plated Chain-Set of 3",
    price: 5432,
    qty: 1,
    image: "/images/img.jpg",
  },
  {
    id: 3,
    title: "Gold-Plated Chain-Set of 3",
    price: 5432,
    qty: 1,
    image: "/images/img.jpg",
  },
  {
    id: 4,
    title: "Gold-Plated Chain-Set of 3",
    price: 5432,
    qty: 1,
    image: "/images/img.jpg",
  },
];

const CartPage = () => {
  const [products, setProducts] = useState(productsData);

  const handleQtyChange = (id, newQty) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, qty: newQty } : product
      )
    );
  };

  const total = products.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
    <Navbar/>
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
                  <h2 className="font-semibold">{product.title}</h2>
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
                  ₹{(product.price * product.qty).toLocaleString()}
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
      <Footer/>
    </>
  );
};

export default CartPage;