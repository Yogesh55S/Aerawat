import { useEffect, useState } from "react";
import left from "../assets/left.png";
import right from "../assets/right.png";
import "../css/content.css";

const RecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    fetch("http://localhost:5001/api/recentlyViewed")
      .then((res) => res.json())
      .then((data) => setRecentlyViewed(data))
      .catch((err) => console.error("Failed to fetch recently viewed:", err));
  }, []);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < recentlyViewed.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = recentlyViewed.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="px-10 py-8 relative h-full mx-auto mt-14 mb-44">
      <h2 className="text-3xl font-bold mb-6 text-center">Recently Viewed Items</h2>

      <div className="flex justify-center flex-wrap gap-6 relative">
        {/* Previous Button */}
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

        {/* Recently Viewed Items */}
        {visibleItems.map((item) => (
          <div
            key={item._id}
            className="relative"
            style={{
              width: "274px",
              height: "335px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute bottom-0 left-0 botton">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-md font-bold">{item.price}</p>
            </div>
          </div>
        ))}

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={(currentPage + 1) * itemsPerPage >= recentlyViewed.length}
          className={`absolute right-47 top-50 transform -translate-y-1/2 flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full transition-transform ${
            (currentPage + 1) * itemsPerPage >= recentlyViewed.length
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
