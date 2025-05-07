/* eslint-disable no-undef */
const Cart = require("../models/cart");

exports.addToCart = async (req, res) => {
  try {
    const { productId, name, price, image, quantity } = req.body;
    const item = new Cart({ productId, name, price, image, quantity });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: "Error adding to cart", error: err.message });
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const items = await Cart.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart", error: err.message });
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting cart item", error: err.message });
  }
};

exports.updateQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;
    const updated = await Cart.findByIdAndUpdate(req.params.id, { quantity }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating quantity", error: err.message });
  }
};
