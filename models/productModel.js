const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  ProductName: { type: String, required: true, unique: true },
  CategoryId: { type: Object, required: true },
  CategoryName: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
