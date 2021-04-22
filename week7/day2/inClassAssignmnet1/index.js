const express = require("express") //this statement grams express from where you install
const app = express()

const PORT = 2021

app.get("/", (req, res) =>{
    res.send("Home")
})
app.get("/about", (req, res) =>{
    res.send("About")
})
app.get("/team", (req, res) =>{
    res.send("Team")
})
app.post("/FAQ", (req, res) =>{
    console.log(req)
    res.send("FAQ page")
})

app.listen(PORT, () =>{
    console.log(`You are on port ${PORT}`)
})