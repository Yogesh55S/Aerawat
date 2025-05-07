/* eslint-disable no-undef */
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price: String,
  image: String,
  quantity: Number,
});

module.exports = mongoose.model("Cart", cartSchema);
