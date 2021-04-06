const express = require("express");

// importing middleware to validate the api
const validateApi = require("../common/apiKeyValidator");

const categoryController = require("../controllers/categoryController");

const router = express.Router();

router.post("/create", validateApi, categoryController.createCategory);

router.get("/read", validateApi, categoryController.getCategories);

router.patch("/update", validateApi, categoryController.updateCategory);

router.delete("/delete", validateApi, categoryController.deleteCategory);

module.exports = router;
