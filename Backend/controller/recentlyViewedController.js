const RecentlyViewed = require("../models/RecentlyViewed");

// Get all recently viewed products (limit to 10)
exports.getRecentlyViewed = async (req, res) => {
  try {
    const recentlyViewed = await RecentlyViewed.find()
      .sort({ viewedAt: -1 }) // Sort by most recently viewed
      .limit(10); // Limit to 10 items
    res.status(200).json(recentlyViewed);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch recently viewed products" });
  }
};

// Add a product to recently viewed
exports.addRecentlyViewed = async (req, res) => {
  const { productId, name, price, image } = req.body;

  try {
    // Check if the product already exists in recently viewed
    const existingProduct = await RecentlyViewed.findOne({ productId });

    if (existingProduct) {
      // Update the viewedAt timestamp
      existingProduct.viewedAt = Date.now();
      await existingProduct.save();
    } else {
      // Add a new product
      const newProduct = new RecentlyViewed({ productId, name, price, image });
      await newProduct.save();
    }

    // Ensure the limit of 10 items
    const totalItems = await RecentlyViewed.countDocuments();
    if (totalItems > 10) {
      const oldestItem = await RecentlyViewed.findOne().sort({ viewedAt: 1 }); // Find the oldest item
      await RecentlyViewed.findByIdAndDelete(oldestItem._id); // Delete the oldest item
    }

    res.status(201).json({ message: "Product added to recently viewed" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add product to recently viewed" });
  }
};