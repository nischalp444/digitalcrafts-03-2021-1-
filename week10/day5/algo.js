// Write a function that accepts a number as an argument. The function should then return the factorial of that number. A factorial of a number means to multiply all whole numbers between that number in one. Example: 5! => 5 * 4 * 3 * 2 * 1 = 120.

function factoral(userNumber) {
    while (userNumber <= 0) {
        let result = userNumber * (userNumber - 1)   
        return (userNumber -= 1, result)
    }
    console.log(userNumber)
    // console.log(result)
   
}
factoral(5)

// Create a JS function to transform the object values to an array
const obj = {
    person: {
        name: 'Tyler',
        age: 28,
        height: '180cm'
    },
    hobbies: {
        sport: 'Football',
        game: 'Overwatch'
    }
}

const personName = obj.person.name.slice(" ")
console.log(personName)
const personAge = obj.slice
console.log(personAge)


//callback function
function hello(helloworld) {
    helloworld = 10
    return helloworld    
}