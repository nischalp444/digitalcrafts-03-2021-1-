if(process.env.NODE_ENV !== "production" ){
    require("dotenv").config()
}
const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt") //helps us dechyper a hash
const passport = require("passport"); // passport a way for node js to authenticate 
const flash = require("express-flash");
const session = require("express-session");
const es6Renderer = require("express-es6-template-engine");
const initizalzedPassport = require("./passport-config")

initizalzedPassport(
    passport,
    (email) =>user.find(user.email === email),
    (id) =>user.find(user.id === id)
)

//PORT
const PORT = 2028
//this is mimiking a database
const user = [];

//middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("../public")); //requires static files
app.use(express.json());
app.use(cors());
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
}))

app.engine("html", es6Renderer);
app.set("views", "../views");
app.set("view engine", "html");

// aceess out form from information inside of our req
app.use(express.urlencoded({ extended: false}))

function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login");
}

function checkIfUserIsLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return res.redirect("/")
    }
    res.redirect("/login");
}

app.get("/", (req, res) =>{
    res.render("Home")
})

app.get("/login", (req, res) =>{
    res.render("Home")  
})
app.post('/login', passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
}))


app.get("/register", (req, res) =>{
    res.render("Home")
})

app.post("/register", async(req, res) =>{
    try{
       const salt = bcrypt.genSalt()
       //const test = "hi";
       const hashedPassword = await bcrypt.hash(req.body.password, salt);

       const user = {
           id:Date.now().toString(),
           name: req.body.name,
           email: req.body.email,
           password: hashedPassword,
       }
       user.puch(user);
       res.status(200).redirect("/login");
    }catch(error){
        res.status(401).redirect("/register")
    }

})
app.listen( PORT, () => console.log(`On port ${PORT}`));