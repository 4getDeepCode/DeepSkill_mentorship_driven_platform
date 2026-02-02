const mongoose = require("mongoose");
const config = require(".");
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.DB_URL);

    console.log(`MongoDB Connected: ${conn.connection.host} ✅`);
  } catch (error) {
    console.error("MongoDB connection failed ❌");
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
