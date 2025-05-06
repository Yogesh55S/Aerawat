const RecentlyViewed = require("../models/RecentlyViewed");

// Get all recently viewed products (limit to 10)
exports.getRecentlyViewed = async (req, res) => {
  try {
    const recentlyViewed = await RecentlyViewed.find()
      .sort({ viewedAt: -1 }) 
      .limit(10);
    res.status(200).json(recentlyViewed);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch recently viewed products" });
  }
};

exports.addRecentlyViewed = async (req, res) => {
  const { productId, name, price, image } = req.body;

  try {
    
    const existingProduct = await RecentlyViewed.findOne({ productId });

    if (existingProduct) {
     
      existingProduct.viewedAt = Date.now();
      await existingProduct.save();
    } else {
     
      const newProduct = new RecentlyViewed({ productId, name, price, image });
      await newProduct.save();
    }


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