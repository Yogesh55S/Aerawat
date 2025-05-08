/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Product = require("../models/product");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products
    res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  } 
};

exports.addProduct = async (req, res) => {
  const { name, price, image, description } = req.body;

  try {
    // Validate required fields
    if (!name || !price || !image || !description) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newProduct = new Product({
      name,
      price: Number(price), // Ensure price is saved as a number
      image,
      description,
    });

    await newProduct.save();
    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (err) {
    console.error("Error adding product:", err);
    res.status(500).json({ error: "Failed to add product" });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ error: "Failed to fetch product" });
  }
};
