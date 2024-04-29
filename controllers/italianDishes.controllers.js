const uuid4 = require("uuid");

const italianDishes = require("../italianDishes");

exports.getAllItalianDishes = async (req, res) => {
  try {
    res.status(200).json(italianDishes); // Return the Italian dishes as JSON
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.getOneDish = async (req, res) => {
  try {
    const { id } = req.params;
    const foundDish = italianDishes.find((dish) => dish.id === Number(id));
    res.status(200).json(foundDish); // Return the Italian dishes as JSON
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.createDish = async (req, res) => {
  try {
    const newDishData = { ...req.body, id: uuid4() };

    // Add the new dish to your menu (e.g., an array of dishes)
    italianDishes.push(newDishData);

    // Send a response with the newly created dish
    res.status(201).json(newDish);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteDish = async (req, res) => {
  try {
    const dishId = req.params.id;
    const dishIndex = italianDishes.findIndex((dish) => dish.id === +dishId);
    if (dishIndex !== -1) {
      italianDishes.splice(dishIndex, 1);
      res.status(204).end(); // Respond with a 204 No Content status code
    } else {
      res.status(404).json({ error: "Dish not found" }); // Respond with a 404 Not Found status code and an error message
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateDish = async (req, res) => {
  try {
    const dishId = req.params.id;
    const updatedDishData = req.body;
    // Implement the code to update the dish in the array
    const index = italianDishes.findIndex((dish) => dish.id === Number(dishId));
    if (index !== -1) {
      // Update the dish with the new data
      italianDishes[index] = { ...italianDishes[index], ...updatedDishData };
      res.status(201).json(italianDishes[index]); // Respond with the updated dish
    } else {
      res.status(404).json({ error: "Dish not found" }); // Respond with a 404 Not Found status code and an error message
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
