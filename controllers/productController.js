const Product = require("../models/productModel");
const Category = require("../models/categoryModel");

const createProduct = async (req, res) => {
  try {
    const { productName, categoryId } = req.body;
    const category = await Category.findById(categoryId);
    console.log(category);
    const newProduct = new Product({
      ProductName: productName,
      CategoryId: categoryId,
      CategoryName: category.CategoryName,
    });
    await newProduct.save();
    res.status(201).json({ message: "product created successfully!" });
  } catch (err) {
    res.json(err.message);
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}, { __v: 0 });
    res.json(products);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { productId, newName } = req.body;
    const product = await Product.findById(productId);
    product.ProductName = newName;
    product.save();
    res.json({ message: "product updated successfully!" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await Product.findById(productId);
    product.remove();
    res.json({ message: "product deleted successfully!" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };
