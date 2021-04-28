const Pool = require("pg/lib").Pool

const pool = new Pool ({
    user: "postgres",
    password: "",
    host: "localhost",
    port: 5432,
    database: "logininfo"

})

module.exports = pool;

