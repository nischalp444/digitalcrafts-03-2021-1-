const http = require("http")
const express = require("express");
const app = express();
const address = "127.0.0.1"
const PORT =2021;
const {readFile} = require("fs")

app.use(express.json())
  
app.get("/", (req, res) => {
  readFile("./index.html", "utf8", (html))
    res.send(html);
  });
  app.get("/store", (req, res) => {
    const message = "Welcome to the Store"
    res.send(message);
  });
  app.get("/contact", (req, res) => {
    const message = "Contact US"
    res.send(message);
  });

  app.listen(PORT, () => {
    console.log(`Your server is being hosted on localhost:${PORT}`);
  });