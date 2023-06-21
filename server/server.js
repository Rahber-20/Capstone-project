const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const DB = "mongodb+srv://syedrahber:rahber1998@cluster0.9wxbzcn.mongodb.net/flixxit?retryWrites=true&w=majority"

const app = express();

app.use(cors());
app.use(express.json());



mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});