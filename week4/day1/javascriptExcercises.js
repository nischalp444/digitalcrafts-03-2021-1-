//define variables
var variable1 = "hello";
let variable2 = 7;
const variable3 = "Nischal"

//define an array
var cars = ["nissan", "ford", "toyota"]

//define an ojbect
var nissan = {type: "sentra", year: "2012", color: "black"}

//define an integer
var variabele4 = 11;

//define a string
var variable5 = "string";

//re-assign the string you just created a new string
var variable5 = "This is a new string";

//create a new variable that takes your integer ablove and mulitiplies it by 5
var variable6 = variabele4 * 5;

//Create an array that has the following in it ["swag", 123123, true, false, "boolean"]
let newArray = ["swag", 123123, true, false, "boolean"]

//print out 123123
console.log(newArray[1])

//print out false
console.log(newArray[3])

//print out boolean
console.log(newArray[4])

//bonus: print out the length of the array
console.log(newArray.length);

//Create an object that has the following structure name: "name", age: 20, height: 7.1, metric: "ft"
var Nischal = {name: "Nischal", age: 23, height: 7.1, metric: "ft"}
var Rama = {name: "Rama", age: 48, height: 7.1, metric: "ft"}
var Safal = {name: "Safal", age: 29, height: 7.1, metric: "ft"}
var Wesley = {name: "Wesley", age: 23, height: 7.1, metric: "ft"}
var David = {name: "David", age: 23, height: 7.1, metric: "ft"}

//Print out the first objects name
console.log(Nischal.name)
//Print out the last objects age
console.log(David.age)
//print out the 3rd objects height
console.log(Safal.height)
//change the 3rd objects height to be 1.2
Safal.height = 1.2
//change the 3rd objects metric to be "meters"
Safal.metric = "meters"
//create a new key on the 2nd object called sport. Assign it your favorite sport
Rama.sport = "Soccer"