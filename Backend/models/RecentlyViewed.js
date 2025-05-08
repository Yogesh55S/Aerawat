/* eslint-disable no-undef */
const mongoose = require("mongoose");

const recentlyViewedSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  viewedAt: { type: Date, default: Date.now }, // To track the order of recently viewed items
});

module.exports = mongoose.model("RecentlyViewed", recentlyViewedSchema);