const express = require("express");
const productController = require("../controllers/products");
const router = express.Router();

router.get("/", productController.getProducts);

router.get("/products", (req, res, next) => {
  res.send("<h1>Products<h1/>");
  console.log("Products route");
})

router.get("/cart", (req, res, next) => {
  res.send("<h1>Cart<h1/>");
  console.log("Cart route");
})
module.exports = router;
