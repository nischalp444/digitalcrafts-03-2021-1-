const Pool = require("pg").Pool

const pool = new Pool ({
    user: "postgres",
    password: "lighter99",
    host: "localhost",
    port: 5432,
    database: "todolist"

})

module.exports = pool;

