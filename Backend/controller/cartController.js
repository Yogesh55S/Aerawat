/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Cart = require("../models/cart");

// Add to Cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, name, price, image, quantity } = req.body;
    const existingItem = await Cart.findOne({ productId });

    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.status(200).json(existingItem);
    }

    const cartItem = new Cart({ productId, name, price, image, quantity });
    await cartItem.save();

    res.status(201).json(cartItem);
    } catch (err) {
    console.error("Error saving to cart:", err);
    res.status(500).json({ error: "Failed to save item to cart" });
    }
  };

  exports.getCartItems = async (req, res) => {
    try {
    const items = await Cart.find();
    res.status(200).json(items);
    } catch (err) {
    res.status(500).json({ error: "Failed to fetch cart items" });
    }
  };
