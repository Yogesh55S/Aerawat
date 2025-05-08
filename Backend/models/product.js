/* eslint-disable no-undef */
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Product name
  price: { type: Number, required: true }, // Product price
  image: { type: String, required: true }, // Path or URL to the product image
  description: { type: String, required: true }, // Product description
});
 
module.exports = mongoose.model("Product", productSchema);