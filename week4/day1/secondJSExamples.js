//String interpolation

let height = "6ft"
let weight = "140lbs"

let JoesDimentions = `Joes height is ${height} and he weights ${weight}`
console.log(JoesDimentions)

//for in is for objects
const collectionOfPizza = {
    firstPizza{
                crust: 'thin',
                toppings: ["cheese", "pepperoni", "spinach", "onions", "anchovies", "feta", "seaweed", "cream cheese", "mushrooms", "pineapple", "quinoa", "tofu"],
                size: "Large",
                sauce: ["marinara", "alfredo"]
              }
    secondPizza{
      crust: 'thin',
      toppings: ["cheese", "pepperoni", "spinach", "onions", "anchovies", "feta", "seaweed", "cream cheese", "mushrooms", "pineapple", "quinoa", "tofu"],
      size: "Large",
      sauce: ["marinara", "alfredo"]
              }
}
for ( const slice in pizza )

//for of is for arrays
