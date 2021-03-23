start_messsage = print("""
\n Hail fellows well met, and welcome to the land of sanctity.
 \nAmongst all Ladies Lords and Knights we have lost a princess.
 \n Henceforth we ask of your intentions? is thou heart Chivalrous or  Devilish? 
 \nCan you save the princess and slay thine Dragon?
 
  _   _   _   _+       |
/_`-'_`-'_`-'_|  \+/  |
\_`M'_`D'_`C'_| _<=>_ |
  `-' `-' `-' 0/ \ / o=o
              \/\ ^ /`0
              | /_^_\
              | || ||
            __|_d|_|b__
 """ )


import random

class Knight:

    def __init__(self, name, hp, spell):
        self.name = name
        self.hp = hp
        self.spell = spell
    
    def attack(self,char,maxnum):
        amount_effected = random.randint(1,maxnum)
        char.hp -= amount_effected
        print(f"{self.name} has attacked and {char.name} health was reduced too {char.hp}")


    def charm(self,char):
        amount_healed = random.randint(1,100)
        char.hp += amount_healed
        
        print(f"you charmed the {char.name} and he healed {amount_healed} and is now at {char.hp}")
    

dragon = Knight("Dragon",50,100)



# def random_number(player1,player2):
#     num1 = random.randint(1,20)
#     if num1 <= 10:
#         player1.attack()
#     else: 
#     # num1 <= 20 and num1 > 11:
#         player1.charm()


def you_won(player,dragon):
    print(f"thank you {player.name} you have defeated the dragon and rescued the princess we are all indebted to you")


player = ''
def start_of_game():
    global player 
    message = int(input("""
“⚔️  ⚔️
Choose your protagonist. \n 1. Demon Knight
\n 2.Holy Knight \n 
Each one has different stats! Good luck!”
"""))

    if message == 1: 
        player = Knight("Demon Knight",75, 100)
    elif message == 2:
        player = Knight("Holy Knight", 50, 10)
    else: 
        print("ahhhh that quest was not granted please select a valid player")

    print(f"You have made it through your first task and have chosen to continue this journey as {player.name} now on to fight the dragon!") 
    
    return player

start_of_game()


while player.hp > 0: 
    user_input = int(input("Press (1) to charm the dragon press (2) to attack "))

    if user_input == 1:
        player.charm(dragon)
        dragon.attack(player,100)
        


    elif user_input == 2: 
        player.attack(dragon,50)

    else: 
        print("The dragon is still alive and that was not a valid input")

    if dragon.hp <= 0: 
        print("""
        You defeated the dragon and rescued the princess!!  \n                                 A
(,);    /\                 A    H
(  ^_   ||       ...       H MM HA
' /  \  ||      (()))     AH^HH^HH
  L <=) ||      {' ())    HH_HH_HH
   ) -  ||       )_ (() AAxHHHHxAxH
 (_   \====  @  (   (_) HHHH/^\HHHH
 | <___/{ }   \7 \ _> |_HHHH___HHHHH_ 
  """)
    elif player.hp <= 0:  
        print("Oh dear you have been slain. We are going to try again")

def restart():
    restart_input = input("would you like to try again? if yes press (c) to continue or (q) to quit").lower()
    if restart_input == "c":
        start_of_game()    
    else:
        print('Thank you for trying the princess will remain in captivity')

        exit()

restart()