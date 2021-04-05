const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  CategoryName: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Category", categorySchema);
