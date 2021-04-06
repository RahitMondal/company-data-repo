const express = require("express");
const mongoose = require("mongoose");

// importing the routes
const categoryRouter = require("./routes/categoryRouter");
const productRouter = require("./routes/productRouter");

const port = process.env.PORT || 5000;

// creating an instance of the express calss
const app = express();

// parsing the incoming json data and then calling next() to pass the control to the next middleware
app.use(express.json());

// using modular routes
app.use("/api/category", categoryRouter);

app.use("/api/product", productRouter);

app.use((req, res) => {
  res.json({ message: "invalid url entered" });
});

mongoose
  .connect("mongodb://localhost:27017/company-data-repo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection to the database established successfully");
    // starting the server after database connection establishes successfully
    app.listen(port, () => {
      console.log(`server started at port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
