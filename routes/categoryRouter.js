const express = require("express");

const categoryController = require("../controllers/categoryController");

const router = express.Router();

router.post("/create", categoryController.createCategory);

router.get("/read", categoryController.getCategories);

router.patch("/update", categoryController.updateCategory);

router.delete("/delete", categoryController.deleteCategory);

module.exports = router;
