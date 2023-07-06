//pkKM0FUrUExRufn8
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/library-routes");
const cors = require("cors");
const app = express();

// Middlewares
// app.use('/', (req,res, next) => {
//   res.send("This is our starting app")
// })
app.use(express.json());
app.use(cors());
app.use("/librarys", router);

mongoose
  .connect("mongodb+srv://")
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
