const Category = require("../models/categoryModel");

const createCategory = async (req, res) => {
  try {
    const CategoryName = req.body.categoryName;
    const newCategory = new Category({ CategoryName });
    await newCategory.save();
    res.json({ message: "category created successfully" });
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
    category.CategoryName = newName;
    category.save();
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
    res.json({ message: "category deleted successfully" });
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
