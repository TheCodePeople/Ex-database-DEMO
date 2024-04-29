const express = require("express");

const italianDishesRoutes = require("./routes/italianDishes.routes");
const connectDB = require("./database");

const app = express();
const PORT = 8000; // Choose a port of your choice

connectDB();

app.use(express.json());
app.use("/dishes/italian", italianDishesRoutes);

app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
