const italianDishes = require("../italianDishes");

const getAllDishes = async (req, res) => {
  try {
    res.status(200).json({ italianDishes });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};

module.exports = { getAllDishes };
