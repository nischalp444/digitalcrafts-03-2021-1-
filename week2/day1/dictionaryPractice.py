# digitalCraftsStudent = {
#     "Name": "Nischal",
#     "City": "Tampa",
#     "computer": ["ASUS"],

# }

# # Print out your computer information in the terminal

# print("Computer information:")
# print(digitalCraftsStudent ["computer"][0])

# gamer = {
#     "platform": "PS5",
#     "gamingHours": [{"weekday": "9-5"}, {"weekends": "anytime"}],
#     "skill": 'noob'
# }

# # Print on the terminal what time you would game

# print("Gaming Hours:")
# print(gamer ["gamingHours"][1]["weekends"])



# 1. print out a list of engine choices (the whole list)
# 2. print out the horsepower values only (all of them) (230,300, 400)
# 3. check to see if the value "trim" exist on the car dictionary (google how to find if something exists inside a dictionary)
# 4. add a new key to the car dictionary called "colors" which will be a list of all possible colors (use 4 color strings) (create colors)
# 5. find an image and put the url into https://bitly.com/, and paste shortened url into that "image" value


car = {
    "model": "",
    "image": "",
    "year": "",
    "engineChoices": [

        {
            "v4": {
                "horsepower": 230
            }
        },
        {
            "v6": {
                "horsepower": 300
            }
        },
        {
            "v8": {
                "horsepower": 400
            }
        },
        {
            "v12": {
                "horsepower": 900
            }
        }
    ],

}


# Engine Choices
print(car["engineChoices"])

# Horsepower Values
print(car["engineChoices"][0]["v4"]["horsepower"])
print(car["engineChoices"][1]["v6"]["horsepower"])
print(car["engineChoices"][2]["v8"]["horsepower"])
print(car["engineChoices"][3]["v12"]["horsepower"])

# Check to see if "trim" exists
a = "trim"
if a in car:
    print("Key Exists!")
else:
    print("Key does not exist!")

# Add a new keyword
car = {"colors" : ["black", "white", "red", "silver"]}

# Check to see if the keyword you added worked
b = "colors"
if b in car:
    print("Key Exists!")
else:
    print("Key does not exist!")

# Shorten your link
print("The link to a car: https://bit.ly/3tlcG6G ")