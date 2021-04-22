const express = require("express") 
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3002
const pool = require("./db.js")
console.log(port)

app.use(express.json())
app.use(cors())

app.get("/", (req, res) =>{
    res.send("Welcome to the node Server")
})
//route that we define for our node server

//CRUD

//Create todolist
app.post("/todo", async (req, res) => {
    try {
      const { description } = req.body;
      const newTodoInDB = await pool.query(
        "INSERT INTO todo (description) VALUES($1)",
        [description]
      );
  
      res.json(newTodoInDB);
    } catch (err) {
      console.error(err.message);
    }
  });
//read  the todolist
app.get("/read_todos", async (req, res) => {
    try {
      const readTodosFromDB = await pool.query("SELECT * from todo");
      res.json(readTodosFromDB);
    } catch (err) {
      console.error(err.message);
    }
  });

//read  a specfic todolist
app.get("/read_todos/:id", async (req, res) => {
    try {
      const { id } = req.params; // this looks at the url for whatever you put in :
  
      const readSingleTodoFromDB = await pool.query(
        "SELECT * from todo WHERE todo_id = ($1)",
        [id]
      );
      res.json(readSingleTodoFromDB);
    } catch (err) {
      console.error(err.message);
    }
  });
//update the todo item on todolist
app.put("/update_todo/:id", async (req, res) =>{
    try{
    const {id} = req.params
    const {description} = req.body

    const updateToDoInDB = await pool.query("UPDATE todo ET description = $1 WHERE todo_id = $2", [description, id])
    res.json("Updated the todos yay!")
    }catch(err){
        console.log(err.message)
    }
})
//delete the todo

app.listen(port, () =>{
    console.log(`You are on port ${port}`)
})