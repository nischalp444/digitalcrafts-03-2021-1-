#1. Fizz Buzz
# Write a program that prints the numbers from 1 to 100. 
# But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
# For numbers which are multiples of both three and five print "FizzBuzz".

# x = 0
# for x in range (1, 101):

#     if (x % 3 == 0 and x % 5 == 0):
#         print("FizzBuzz")
#     elif (x % 3 == 0):
#        print( "Fizz")
#     elif (x % 5 == 0):
#         print("Buzz")
#     elif (x % 3 != 0 and x % 5 != 0):
#         print(x)

# 2. Sum of All Multiples of 3 or 5 below 1000
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.

x = 0
for x in range (1, 1001):

    if (x % 3 == 0):
       print( x )
    if (x % 5 == 0):
        print( x )
