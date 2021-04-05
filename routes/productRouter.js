const express = require("express");

const productController = require("../controllers/productController");

const router = express.Router();

router.post("/create", productController.createProduct);

router.get("/read", productController.getProducts);

router.patch("/update", productController.updateProduct);

router.delete("/delete", productController.deleteProduct);

module.exports = router;
