const express = require("express");

// importing middleware to validate the api
const validateApi = require("../common/apiKeyValidator");

const productController = require("../controllers/productController");

const router = express.Router();

router.post("/create", validateApi, productController.createProduct);

router.get("/read", validateApi, productController.getProducts);

router.patch("/update", validateApi, productController.updateProduct);

router.delete("/delete", validateApi, productController.deleteProduct);

module.exports = router;
