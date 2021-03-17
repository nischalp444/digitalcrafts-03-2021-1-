# KEEPING YOURSELF ORGANIZED
# define global functions and variables first at the top of your program
# define Classes next and any unique methods inside of them
# then define your while loop if you need the user to keep doing task until a certain condition is met (remember, your condtion needs to be global, and needs to be re-assigned inside your while loop)

# 1
# Create a user class that has the ability to print the users name
# The ability to print the users age 

#2
# Create a temp_user class, that has the ability to only print his name

#3
# Create a function that as you to give the user a name and age and will then create the user for you and will print it to the screen.
#The user will have a choice to either be a temp or a user

class user:
    def __init__(self, name, age):
        self.name = name
        self.age = age

# nischal = user("Nischal", 23)

# print("The name of the user is", nischal.name)
# print("The age of the  user is", nischal.age)

class temp_user:
    def __init__(self , name):
        self.name = name


def function():
    nameChoice = input("Give the user a name:")
    ageChoice = int(input("Give the user a age"))

    userType = int(input("Would you like to be a temp user or a regular user? 1 for temp, 2 for regular: "))



    if (userType == 1):
        nameChoice = temp_user(nameChoice)
        print("The name of your user is", nameChoice.name)

    elif(userType == 2):
        nameChoice = user(nameChoice, ageChoice)
        print("The name of the user is", nameChoice.name)
        print("The age of the  user is", nameChoice.age)

    else:
        Print("Invalid Entry")
    
#function()


#Create a building class
# buildilng class will have 
# height
# capacity
# sqft
# # commercial or residential
# commercial
# ask the user to create a building (new instance of the building class)
# they will enter in height
# capacity (people)
# sqft
# 5 instances of a building
# print out the specs of the buildilng everytime a building is made
# print statement needs to be a method

class building():
    def __init__(self, height, capacity, sqft):
        self.height = height
        self.capacity = capacity
        self.sqft = sqft
    def printall(self):
        print(f"this will print {self.height}")
        
height1 = int(input("enter a height"))
capacity1 = int(input("enter a capacity"))
sqft1 = int(input("Enter a sqft"))

def askUser(height1, capacity1, sqft1):
    print("You will be creating a new building")
    # height1 = int(input("enter a height"))
    # capacity1 = int(input("enter a capacity"))
    # sqft1 = int(input("Enter a sqft"))
    build = building(height1, capacity1, sqft1)
    build.printall()

askUser(height1, capacity1, sqft1)
    # num = 0
    # while (num < 5):
    #     name = building(height1, capacity1, sqft1, type1 )
    #     print("Builing height: ", name.height)
    #     print("Builing capacity: ", name.capacity)
    #     print("Builing sqft: ", name.sqft)


    #     num += 1
# num = 0
# while (num < 5):
#     # askUser()
    # name = building(height1, capacity1, sqft1, type1 )
    # print("Builing height: ", name.height)
    # print("Builing capacity: ", name.capacity)
    # print("Builing sqft: ", name.sqft)
    # num += 1

#askUser()