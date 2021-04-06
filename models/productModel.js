const { Schema, model } = require("mongoose");

const productSchema = Schema({
  productName: { type: String, required: true, unique: true },
  categoryId: { type: Schema.Types.ObjectId, required: true },
  categoryName: { type: String, required: true },
});

module.exports = model("Product", productSchema);
