const express = require("express");
const italianDishes = require("../italianDishes");

const uuid4 = require("uuid");
const { getAllDishes } = require("../controllers/italianDishes.controllers");

const router = express.Router();

router.get("/", getAllDishes);

router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const foundDish = italianDishes.find((dish) => dish.id === Number(id));
    res.status(200).json({ foundDish });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/", (req, res) => {
  try {
    const newDishData = { ...req.body, id: uuid4() };

    italianDishes.push(newDishData);

    res.status(201).json(newDish);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id", (req, res) => {
  try {
    const dishId = req.params.id;
    const dishIndex = italianDishes.findIndex((dish) => dish.id === +dishId);
    if (dishIndex !== -1) {
      italianDishes.splice(dishIndex, 1);

      res.status(204).end();
    } else {
      res.status(404).json({ message: "Dish not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/:id", (req, res) => {
  try {
    const dishId = req.params.id;
    const updatedDishData = req.body;

    const index = italianDishes.findIndex((dish) => dish.id === Number(dishId));
    if (index !== -1) {
      italianDishes[index] = { ...italianDishes[index], ...updatedDishData };
      res.status(201).json({ italianDishes });
    } else {
      res.status(404).json({ message: "Dish not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
