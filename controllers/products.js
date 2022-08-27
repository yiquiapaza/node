const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.feachAll((products) => {
    res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
  });
};
