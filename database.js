const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    const connectedLink = await mongoose.connect(process.env.DB);
    console.log(`db is connected: ${connectedLink.connection.host}`);
  } catch (error) {
    console.log(`something went wrong while connecting to db: ${error}`);
  }
};

module.exports = connectDB;
