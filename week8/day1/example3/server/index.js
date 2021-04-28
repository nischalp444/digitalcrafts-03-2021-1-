const express = require("express");
const app = express();
const cors = require("cors")
const port = process.env.PORT || 2021
const pool = require("./db.js")
const es6renderer = require("express-es6-template-engine");

app.use(express.json())
app.use(cors())

//middleware?
app.engine("html", es6renderer);
app.set("views", "../template");
app.set("view engine", "html");
app.use(express.json)

app.get("/", (req, res) =>{
res.render("home")
})

app.post("/create", async(req, res) => {
    const { description, date } = req.body
    
    try{

    const createdpost = await pool.query(
        "INSERT INTO list3 (description, date) VALUES($1, $2)",
        [description, date]);
        res.json(createdpost);
    }catch(err){
        console.error(err.message);
    }
});
app.get("/read_todo:id", async (req, res) => {
    try {

      const { id } = req.params;
      const readlistFromDB = await pool.query("SELECT * from list3");
      res.json(readlistFromDB);
      res.render("home", {
          locals: { description: description , date:date}
      })
    } catch (err) {
      console.error(err.message);
    }
    
  });

app.listen(port, () =>{ 
    console.log(`Access server on port ${port}`)
})