/* eslint-disable no-undef */
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productId: { type: String, required: true }, // ID of the product
  name: { type: String, required: true }, // Product name
  price: { type: Number, required: true }, // Product price
  image: { type: String, required: true }, // Path or URL to the product image
  description: { type: String, required: true }, // Product description
  quantity: { type: Number, required: true }, // Quantity of the product in the cart
});

module.exports = mongoose.model("Cart", cartSchema);
