const { Schema, model } = require("mongoose");

const categorySchema = Schema({
  categoryName: { type: String, required: true, unique: true },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

module.exports = model("Category", categorySchema);
