const Product = require("../models/productModel");
const Category = require("../models/categoryModel");

const createProduct = async (req, res) => {
  try {
    const { productName, categoryId } = req.body;
    if (productName.length < 3)
      throw Error("productName should be atleast 3 characters long");
    const category = await Category.findById(categoryId);
    const newProduct = new Product({
      productName: productName.toLowerCase(),
      categoryId,
      categoryName: category.categoryName,
    });
    await newProduct.save();
    await category.products.push(newProduct._id);
    category.save();
    res.status(201).json({ message: "product created successfully!" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const getProducts = async (req, res) => {
  let { category } = req.query;
  let products;
  try {
    if (category) {
      const curCategory = await Category.findOne({
        categoryName: category.toLowerCase(),
      }).populate("products");
      products = curCategory.products;
    } else products = await Product.find({}, { __v: 0 });
    res.json(products);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { productId, newName } = req.body;
    const product = await Product.findById(productId);
    product.productName = newName.toLowerCase();
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
    const category = await Category.findById(product.categoryId);
    let newProductsArray = [];
    category.products.forEach((product) => {
      if (product.toString() !== productId.toString())
        newProductsArray.push(product);
    });
    category.products = newProductsArray;
    category.save();
    res.json({ message: "product deleted successfully!" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
