/* eslint-disable no-undef */
const express = require("express");
const { getProducts, addProduct } = require("../controller/productController.js");

const router = express.Router();

// Route to get all products
router.get("/", getProducts);

// Route to add a new product
router.post("/", addProduct);

module.exports = router;