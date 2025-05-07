/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const { addToCart, getCartItems } = require("../controller/cartController");

router.post("/api/cart", addToCart);
router.get("/api/cart", getCartItems); 

module.exports = router;
