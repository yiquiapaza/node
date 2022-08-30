const controllerProduct = require("../controllers/products");
const express = require("express");

const router = express.Router();

router.get("/products", controllerProduct.getAddProduct);

router.post("/products", controllerProduct.postAddProduct);

module.exports = router;
