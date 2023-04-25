const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("always running!");
  next();
});
app.use("/product", (req, res, next) => {
  res.send("<h1>Product Page!</h1>");
});
app.use("/", (req, res, next) => {
  res.send("<h1>Hello form Express.JS!</h1>");
});

app.listen(3000);
