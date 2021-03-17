#Users name
firstNameOfUser = input("What is your first name?")
lengthOfFirstName = len(firstNameOfUser)
while (lengthOfFirstName < 1):
    firstNameOfUser = input("What is your first name?")
    lengthOfFirstName = len(firstNameOfUser)

LastNameOfUser = input("What is your last name?")
lengthOfLastName = len(LastNameOfUser)
while (lengthOfLastName < 1):
    LastNameOfUser = input("What is your last name?")
    lengthOfLastName = len(LastNameOfUser)

print("Your first and last name is %s %s" %(firstNameOfUser, LastNameOfUser))

#Friends Name
nameOfFriendsFirst = input("What is your friends first name")
lengthOfFrinedsFirstName = len(firstNameOfFriend)
while (lengthOfFrinedsFirstName < 1):
    nameOfFriendsFirst = input("What is your friends first name")
    lengthOfFrinedsFirstName = len(firstNameOfFriend)

LastNameOfFriend = input("What is your friends last name?")
lengthOfFriendsLastName = len(LastNameOfFriend)
while(lengthOfFriendsLastName < 1):
    LastNameOfFriend = input("What is your friends last name?")
    lengthOfFriendsLastName = len(LastNameOfFriend)
print("%s %s is friends with %s %s" %(firstNameOfUser, LastNameOfUser, firstNameOfFriend, LastNameOfFriend ) )

