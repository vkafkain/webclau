const mongoose = require("mongoose");
const { User } = require("../models/User");
const { Product } = require("../models/Product");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    let mongoDB = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
    });
    console.log(`Connected to ${process.env.DB_NAME}`);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
