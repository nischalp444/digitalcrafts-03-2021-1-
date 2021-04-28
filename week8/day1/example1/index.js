const express = require("express") 
const app = express()
const cors = require("cors")
const port = process.env.PORT || 2021
const pool = require("./db.js")
console.log(port)

app.use(express.json())
app.use(cors())

app.get("/", (req, res) =>{
    res.send("Welcome to login information")
})

app.post("/createAccount", async(req, res) => {
    try {
        const { first_name } = req.body;
        const { last_name } = req.body;
        const { user_name } = req.body;
        const { password } = req.body;
        
        const newAccountInDB = await pool.query(
          "INSERT INTO logintable (first_name, last_name, user_name, password) VALUES($1, $2, $3, $4)",
          [first_name, last_name, user_name, password]
        );
    
        res.json(newAccountInDB);
      } catch (err) {
        console.error(err.message);
      }
})
app.get("/read_users", async (req, res) => {
    try {
      const readusersFromDB = await pool.query("SELECT * from logintable");
      res.json(readusersFromDB);
    } catch (err) {
      console.error(err.message);
    }
  });
  app.put("/update_users/:id", async (req, res) =>{
      try{
          const {id} = req.params
          const { first_name } = req.body;
          const { last_name } = req.body;
          const { user_name } = req.body;
          const { password } = req.body;
          
          const updateToDoInDB = await pool.query("UPDATE todo ET first_name, last_name, user_name, password = $1, $2, $3, $4 WHERE todo_id = $5", [first_name, last_name, user_name, password, id])
          res.json("Updated first name, lastname, username, password!")
        }catch(err){
            console.log(err.message)
        }
    })
    app.listen(port, () =>{
        console.log(`You are on port ${port}`)
    })