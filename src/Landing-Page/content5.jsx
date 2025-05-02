import { useEffect, useState } from "react";
import image from "../assets/product.jpg";
import left from "../assets/left.png";
import right from "../assets/right.png";

const RecentlyViewed = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < items.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="px-10 py-8 relative h-full  mx-auto mt-14 mb-44">
      <h2 className="text-3xl font-bold mb-6 text-center">Recently Viewed Items</h2>

      <div className="flex justify-center flex-wrap gap-6 relative">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className={`absolute left-40 top-50 transform -translate-y-1/2 flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full transition-transform ${
            currentPage === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-400 hover:scale-110"
          }`}
        >
          <img src={left} alt="Previous" className="w-4 h-4" />
        </button>

        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="text-center"
            style={{
              width: "274px",
              height: "335px",
            }}
          >
            <img
              src={image}
              alt={item.title}
              className="w-full h-auto object-cover mb-3 rounded"
            />
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-md font-bold">{item.price}</p>
            </div>
            <p className="text-sm mt-2">{item.title}</p>
          </div>
        ))}

        <button
          onClick={handleNext}
          disabled={(currentPage + 1) * itemsPerPage >= items.length}
          className={`absolute right-47 top-50 transform -translate-y-1/2 flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full transition-transform ${
            (currentPage + 1) * itemsPerPage >= items.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-400 hover:scale-110"
          }`}
        >
          <img src={right} alt="Next" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default RecentlyViewed;
