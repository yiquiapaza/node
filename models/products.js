const fs = require("fs");
const path = require("path");
const pathRoot = require("../util/path");

const pathProducts = path.join(pathRoot, "data", "products.json");

const getProductsFromFile = (callback) => {
  fs.readFile(pathProducts, (err, fileContent) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(pathProducts, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static feachAll(callback) {
    getProductsFromFile(callback);
  }
};
