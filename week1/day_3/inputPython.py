name_of_user = input("What is your first name?")
lengthOfUserName = len(name_of_user)
if lengthOfUserName > 0:
    print("Valid name entered")
    nameOfFriend = input("What us your friends name?")
    print ("Your friends name is", nameOfFriend)
else:
    print ("please enter at least one letter...")

while (lengthOfUserName < 0):

last_name_of_user = input("what is your last name?")
lengthOfUserLastName = len(last_name_of_user)

print("This is the length of the firts user name is" , lengthOfUserName)
print("This is the length of the firts user name is" , lengthOfUserLastName)
print("Hello %s %s, Welcome to python" % (name_of_user, last_name_of_user))

