/* eslint-disable no-undef */
const Product = require("../models/product");

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// Add a new product
exports.addProduct = async (req, res) => {
  const { name, price, image } = req.body;
  try {
    const newProduct = new Product({ name, price, image });
    await newProduct.save();
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).json({ error: "Failed to add product" });
  }
  }
