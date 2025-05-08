/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Cart = require("../models/cart");

// Add to Cart
exports.addToCart = async (req, res) => {
  const { productId, name, price, image, description, quantity } = req.body;

  try {
    // Validate required fields
    if (!productId || !name || !price || !image || !description || !quantity) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingItem = await Cart.findOne({ productId });

    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.status(200).json(existingItem);
    }

    const cartItem = new Cart({
      productId,
      name,
      price: Number(price), // Ensure price is saved as a number
      image,
      description,
      quantity,
    });

    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (err) {
    console.error("Error saving to cart:", err);
    res.status(500).json({ error: "Failed to save item to cart" });
  }
};
 
// Get Cart Items
exports.getCartItems = async (req, res) => {
  try {
    const items = await Cart.find(); // Fetch all cart items
    res.status(200).json(items);
  } catch (err) {
    console.error("Error fetching cart items:", err);
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
};
