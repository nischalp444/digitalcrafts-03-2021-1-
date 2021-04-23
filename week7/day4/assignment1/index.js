const express = require("express") 
const app = express()
const cors = require("cors")
const port = process.env.PORT || 2021
const pool = require("./db.js")
console.log(port)

app.use(express.json())
app.use(cors())

app.get("/", (req, res) =>{
    res.send("Home Page")
})

app.post("/todo2", async (req, res) => {
    try {
      const { description } = req.body;
      const newTodoInDB = await pool.query(
        "INSERT INTO todo2 (description) VALUES($1)",
        [description]
      );
  
      res.json(newTodoInDB);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.get("/read_todos2/:id", async (req, res) => {
    try {
      const { id } = req.params; 
  
      const readingFromDB = await pool.query(
        "SELECT * from todo2 WHERE todo_id2 = ($1)",
        [id]
      );
      res.json(readingFromDB);
    } catch (err) {
      console.error(err.message);
    }
  });
  app.put("/update_todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
  
      const updateTodo = await pool.query(
        "UPDATE todo2 SET description = $1 WHERE todo_id2 = $2",
        [description, id]
      );
  
      res.json("Updated");
    } catch (err) {
      console.error(err.message);
    }
  });
  app.delete("/delete_todo2/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await pool.query(
        "DELETE FROM todo2 WHERE todo_id2 = $1",
        [id]
      );
      res.json("Deleted");
    } catch (err) {
      console.log(err.message);
    }
  });

  app.listen(port, () =>{
    console.log(`You are on port ${port}`)
})