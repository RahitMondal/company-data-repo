const Category = require("../models/categoryModel");
const Product = require("../models/productModel");

const createCategory = async (req, res) => {
  try {
    const categoryName = req.body.categoryName.toLowerCase();
    if (categoryName.length < 3)
      throw Error("categoryName should be atleast 3 characters long");
    const newCategory = new Category({ categoryName });
    await newCategory.save();
    res.status(201).json({ message: "category created successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({}, { __v: 0 });
    res.json(categories);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { categoryId, newName } = req.body;
    const category = await Category.findById(categoryId);
    category.categoryName = newName.toLowerCase();
    category.save();
    await Product.updateMany({ categoryId }, { categoryName: newName });
    res.json({ message: "category name updated successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.body.categoryId;
    const category = await Category.findById(categoryId);
    category.remove();
    await Product.deleteMany({ categoryId });
    res.json({
      message: "category and the respective products deleted successfully",
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
