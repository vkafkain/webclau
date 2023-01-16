const express = require("express");
const app = express();
const connectDB = require("./database/connectDB");
require("dotenv").config();
const PORT = process.env.SERVER_PORT;

connectDB();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
