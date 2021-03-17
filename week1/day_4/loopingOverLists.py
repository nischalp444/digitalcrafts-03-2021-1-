pets = ["doggo", "cat", "rabbit", "pikachu"]

print (len(pets))
index = 0


while index < len(pets):
    pet = pets[index]
    print ("What pet are you? I am a %s" % pet)
    index += 1

#For loop, for...in
#USE FOR...IN LOOPS FOR A LIST
count = 0
for pet in pets:
    print(pet)
    print(count)
    count += 1