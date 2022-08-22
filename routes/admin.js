const path = require('path');
const rootDir = require('../util/path');
const express = require('express');

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("ROUTER add-product");
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post("/add-product", (req, res, next) => {
  console.log("ROUTER products");
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;