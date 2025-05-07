/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Product = require("../models/product");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

exports.addProduct = async (req, res) => {
  const { name, price, image } = req.body;
  try {
    const newProduct = new Product({ name, price, image });
    await newProduct.save();
  } catch (err) {
    console.error(err); 
    res.status(500).json({ error: "Failed to add product" });
  }
  }
  exports.getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Product not found" });
    }
  };
