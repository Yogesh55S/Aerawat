import { useEffect, useState } from 'react';
import Frame from '../assets/Frame.png';
import image from "../assets/product.jpg";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);

  return (
    <div className="py-16 px-12 max-w-screen-xl mx-auto mt-14">
      <div className="mb-4 text-gray-400 text-sm">
        Lorem ipsum dolor sit amet consectetur.
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {products.slice(0, 24).map((product) => (
          <div key={product.id} className="flex flex-col">
            <img
              src={image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="flex justify-between items-center mt-2 text-sm text-gray-800">
              <span>{product.name}</span>
              <span className="font-bold">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <button className="bg-[#7C1D1D] text-white text-sm font-medium h-14 w-56 rounded-md gap-2 hover:bg-[#5d1515] transition flex items-center justify-center">
          View All Products
          <img src={Frame} alt="Logo" className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
