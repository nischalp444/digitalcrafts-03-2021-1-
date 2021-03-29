function calculator (num1, operator, num2){
    if (operator === "+") {

        result = num1 + num2
        
    }else if(operator === "-"){

        result = num1 - num2

    }else if (operator === "*"){

        result = num1 * num2

    }else if(operator==="/"){

        result = num1 / num2

    } else

    console.log("Wrong")

return result
}

console.log(calculator(5,"+",1));