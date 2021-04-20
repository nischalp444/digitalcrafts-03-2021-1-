const express = require("express");
const app = express();
const { readFile } = require("fs");
const PORT =2021;

app.listen(PORT, () => {
    console.log(`Your server is being hosted on localhost:${PORT}`);
  });
  
app.get("/", (req, res) => {
    const message = "Hello My first node server!";
    res.send(message);
  });
  app.get("/store", (req, res) => {
    const message = "Hello My first node server!";
    res.send(message);
  });
  app.get("/contact", (req, res) => {
    const message = "Hello My first node server!";
    res.send(message);
  });