const express = require("express");
const app = express();
const PORT = 2021
const es6Renderer = require("express-es6-template-engine")

//middleware
app.engine("html", es6Renderer)
app.set("views","../template")
app.set("vuew engine", "html")



app.listen(PORT, () => console.log('Acess server on port ${prompt'));
