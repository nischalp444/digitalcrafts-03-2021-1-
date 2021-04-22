const express = require("express");
const app = express();

const PORT =2021;

app.listen(PORT, () => {
    console.log(`Your server is being hosted on localhost:${PORT}`);
  });
  
app.get("/", (req, res) => {
    const message = "Hello My first node server!";
    res.send(message);
  });