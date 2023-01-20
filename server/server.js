require('dotenv').config();
const PORT = process.env.SERVER_PORT;
const express = require('express');
const app = express();
const connectDB = require('./database/connectDB');
const routes = require('./routes/index');
const cors = require('cors');

//Connect to database
connectDB();

//Middleware
app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

//Routes
app.use(routes);

app.get('/', function (req, res) {
  res.send('Server Up');
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
