const express = require("express") 
const app = express()
const cors = require("cors")
const port = process.env.PORT || 2021
const pool = require("./db.js")
console.log(port)

app.use(express.json())
app.use(cors())

app.engine("html", es6renderer);
app.set("views", "../template");
app.set("view engine", "html");
app.use(express.json)

app.listen(port, () =>{ 
    console.log(`Access server on port ${port}`)
})