const Dish = require("../models/Dish");

exports.getAllItalianDishes = async (req, res) => {
  try {
    const allDishes = await Dish.find();
    res.status(200).json({ allDishes });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};

exports.getOneDish = async (req, res) => {
  try {
    const { id } = req.params;
    const foundDish = await Dish.findById(id);
    res.status(200).json(foundDish); // Return the Italian dishes as JSON
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};

exports.createDish = async (req, res) => {
  try {
    const newDish = await Dish.create(req.body);
    res.status(201).json({ newDish });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};

exports.deleteDish = async (req, res) => {
  try {
    const { id } = req.params;
    await Dish.findByIdAndDelete(id);
    res.status(204).json({ message: "Deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};

exports.updateDish = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedDish = await Dish.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res.status(201).json({ updatedDish });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};
