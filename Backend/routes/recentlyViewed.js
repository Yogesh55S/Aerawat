const express = require("express");
const {
  getRecentlyViewed,
  addRecentlyViewed,
} = require("../controller/recentlyViewedController");

const router = express.Router();

// Route to get all recently viewed products
router.get("/", getRecentlyViewed);

// Route to add a product to recently viewed
router.post("/", addRecentlyViewed);

module.exports = router;