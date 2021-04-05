const express = require("express");
const mongoose = require("mongoose");

const categoryRouter = require("./routes/categoryRouter");
const productRouter = require("./routes/productRouter");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/api/category", categoryRouter);

app.use("/api/product", productRouter);

mongoose
  .connect("mongodb://localhost:27017/company-data-repo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection to the database established successfully");
    app.listen(port, () => {
      console.log(`server started at port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
