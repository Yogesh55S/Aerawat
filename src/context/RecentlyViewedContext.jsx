import { createContext, useContext, useState } from "react";

const RecentlyViewedContext = createContext();

export const RecentlyViewedProvider = ({ children }) => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const addToRecentlyViewed = (product) => {
    setRecentlyViewed((prev) => {
      // Avoid duplicates
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      return [product, ...prev].slice(0, 10); // Limit to 10 items
    });
  };

  return (
    <RecentlyViewedContext.Provider value={{ recentlyViewed, addToRecentlyViewed }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
};

export const useRecentlyViewed = () => useContext(RecentlyViewedContext);