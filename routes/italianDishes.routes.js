const express = require("express");

const router = express.Router();

const {
  getAllItalianDishes,
  getOneDish,
  deleteDish,
  updateDish,
  createDish,
} = require("../controllers/italianDishes.controllers");

router.get("/", getAllItalianDishes);

router.get("/:id", getOneDish);

// Create a middleware for creating a dish
router.post("/", createDish);

//
router.delete("/:id", deleteDish);

router.put("/:id", updateDish);

module.exports = router;
