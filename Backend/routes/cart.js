/* eslint-disable no-undef */
const express = require("express");
const { addToCart, getCartItems, deleteCartItem, updateQuantity } = require("../controller/cartController");

const router = express.Router();

router.post("/", addToCart);
router.get("/", getCartItems);
router.delete("/:id", deleteCartItem);
router.put("/:id", updateQuantity);

module.exports = router;
