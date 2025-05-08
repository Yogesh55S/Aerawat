import { useState, useEffect } from "react";

const CartPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/cart");
        const data = await response.json();
        setProducts(data);
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
        product.productId === id ? { ...product, quantity: newQty } : product
      )
    );
  };

  const total = products.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 md:p-12 bg-white h-auto w-full mx-auto mt-9">
      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-3 space-y-6">
          {products.map((product) => (
            <div key={product.productId} className="flex items-start gap-4 border-b pb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex items-center gap-2 my-2">
                  <label htmlFor={`qty-${product.productId}`}>Qty:</label>
                  <select
                    id={`qty-${product.productId}`}
                    className="border rounded px-2 py-1"
                    value={product.quantity}
                    onChange={(e) => handleQtyChange(product.productId, parseInt(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="text-right font-semibold text-lg">
                ₹{((product.price || 0) * (product.quantity || 1)).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4">
          <p>
            Subtotal ({products.length} items): ₹{total.toLocaleString()}
          </p>
          <button className="w-full bg-[#661c1c] text-white py-2 px-4 rounded mt-2 hover:bg-[#4d1212]">
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
