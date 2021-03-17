#Calculator that takes three inputs from user
print("You will enter a number, an operand and another numebr")
print("type q anytime to quit")

# value1 = (input("Please enter your first whole number"))
# value2 = (input("Please enter your second whole number"))

# if value1 == "q":
#     quit()
# if value2 == "q":
#     quit()

# firstValue = int(value1)
# secondValue = int(value2)
# operand = input("Please enter an operand")

# def add(firstValue, secondValue):
#         finalValue = firstValue + secondValue
#         return print (finalValue)

# def sub(firstValue, secondValue):
#         finalValue = firstValue - secondValue
#         return print ( finalValue )

# def mul(firstValue, secondValue):
#         finalValue = firstValue * secondValue
#         return print ( finalValue )

# def div(firstValue, secondValue):
#         finalValue = firstValue / secondValue
#         return print ( finalValue )

# if (operand == "+"):
#     add(firstValue, secondValue)

# elif (operand == "-"):
#     sub(firstValue, secondValue)

# elif (operand == "*"):
#     mul(firstValue, secondValue)

# elif (operand == "/"):
#     div(firstValue, secondValue)
# elif (operand == "q"):
#     quit()
# else:
#     print("Enter a valid operand")

# choice = ""

# while (choice != "y"):
#     value1 = (input("Please enter your first whole number"))
# value2 = (input("Please enter your second whole number"))

# if value1 == "q":
#     quit()
# if value2 == "q":
#     quit()

# firstValue = int(value1)
# secondValue = int(value2)
# operand = input("Please enter an operand")

# def add(firstValue, secondValue):
#         finalValue = firstValue + secondValue
#         return print (finalValue)

# def sub(firstValue, secondValue):
#         finalValue = firstValue - secondValue
#         return print ( finalValue )

# def mul(firstValue, secondValue):
#         finalValue = firstValue * secondValue
#         return print ( finalValue )

# def div(firstValue, secondValue):
#         finalValue = firstValue / secondValue
#         return print ( finalValue )

# if (operand == "+"):
#     add(firstValue, secondValue)

# elif (operand == "-"):
#     sub(firstValue, secondValue)

# elif (operand == "*"):
#     mul(firstValue, secondValue)

# elif (operand == "/"):
#     div(firstValue, secondValue)
# elif (operand == "q"):
#     quit()
# else:
#     print("Enter a valid operand")




# #Joe's Example

# def welcomeMessage():
#     message = """\n \n \n 
#     \n \n \n 
   
#     "Welcome to a calculator!"
#     ************************
#     ************************
#     \n \n \n 
   
#     """
#     return print(message)


# def quitMessage():
#     quitMessage = input("Would you like to quit? y (yes) or n (no)\n")
#     return quitMessage


# def operation(operator, number1, number2):
#     answer = ""
#     if(operator == "+"):
#         answer = int(number1) + int(number2)
#     elif(operator == "*"):
#         answer = int(number1) * int(number2)
#     elif(operator == "/"):
#         answer = int(number1) / int(number2)
#     elif(operator == "-"):
#         answer = int(number1) - int(number2)
#     else:
#         print("Operator invalid")
#     return print("Your operation of %s %s %s is = %s \n" % (number1, operator, number2, answer))


# choice = ""
# while(choice != "y"):
#     welcomeMessage()
#     firstNumber = input("Please enter in your first number\n")
#     operand = input(
#         "Please enter in your choice of operation, ( +, - , * , / )\n")
#     secondNumer = input("Please enter in your second number\n")
#     operation(operand, firstNumber, secondNumer)

#     choice = quitMessage()


def welcomeMessage():
    print("""

    Welcome to the Calculator
    
    """)
def Calculator():
   

    if (operand == "+" ):
        addResult = v1+v2
        print(addResult)
    elif(operand == "-" ):
        subResult = v1-v2
        print(subResult)
    elif (operand == "/" ):
        divResult = v1+v2
        print(divResult)
    elif(operand == "*" ):
        mulResult = v1-v2
        print(mulResult)
    else:
        print("Invalid Operand")

choice = "n"
while (choice != "y"):
    welcomeMessage()
    v1 = int(input("Please enter your first value: "))
    operand = input("Please enter your operand: ")
    v2 = int(input("Please enter your second value: "))
    Calculator()
    choice = input("would you like to quit? enter y or n: ")