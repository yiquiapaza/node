const controllerProduct = require("../controllers/products");
const express = require("express");

const router = express.Router();

router.get("/add-product", controllerProduct.getAddProduct);

router.post("/add-product", controllerProduct.postAddProduct);

module.exports = router;
