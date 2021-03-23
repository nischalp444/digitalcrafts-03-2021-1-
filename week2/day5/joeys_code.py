import random

class Player:
    def __init__(self):
        player

def story():
    print('''
    fix the intro to this game plz
    Press Number to make your move.
    ''')
    play_again = True
    # Set up the play again loop
    while play_again:
        winner = None
        player_health = 1000
        enemy_health = 1000
        # determine whose turn it is
        turn = random.randint(1, 2)  # heads or tails
        if turn == 1:
            player_turn = True
            enemy_turn = False
            print("\nYou make the first strike. Good luck!")
        else:
            player_turn = False
            enemy_turn = True
            print("\nYour opponent makes the first move. Watch out!")
        print(f'''
            Player Health: {player_health}
            Enemy Health: {enemy_health}
            ''')
        # set up the main game loop
        while (player_health != 0 or enemy_health != 0):
            # determine if heal has been used by the player. Resets false each loop.
            heal_up = False
            miss = False  # determine if the chosen move will miss.
            # create a dictionary of the possible moves and randomly select the damage it does when selected
            moves = {"Excalibur": random.randint(150, 230),
                     "Divine Light": random.randint(100, 350),
                     "Potion": random.randint(180, 270)}
            if player_turn:
                print('''Choose your next move:
                (1) Excalibur (Deals 150-230 Damage)
                (2) Divine Light (Deals 100-350 Damage)
                (3) Potion (Restores 180-270 Health)
                ''')
                player_move = int(input("> ").lower())
                move_miss = random.randint(1, 5)  # 20% of missing
                if move_miss == 1:
                    miss = True
                else:
                    miss = False
                if miss:
                    player_move = 0  # player misses and deals no damage
                    print("\nTides turn for the worse: You missed!")
                else:
                    if player_move == (1):
                        player_move = moves["Excalibur"]
                        print("\nYou swing your mighty sword, Excalibur. It deals %s damage." % (
                            player_move))
                    elif player_move == (2):
                        player_move = moves["Divine Light"]
                        print("\nYou call to the heavens to show its Divine Light! It deals %s damage." % (
                            player_move))
                    elif player_move == (3):
                        heal_up = True  # heal activated
                        player_move = moves["Potion"]
                        print("\nYou chug a Potion and throw the bottle. It heals %s damage." % (
                            player_move))
                    else:
                        print(
                            "\nINVALID ENTRY! Please choose using the numbers: 1, 2, or 3")
                        continue
            else:  # computer turn
                move_miss = random.randint(1, 5)
                if move_miss == 1:
                    miss = True
                else:
                    miss = False
                if miss:
                    enemy_move = 0  # the computer misses and deals no damage
                    print("\nThe gods have blessed you! Your opponent misses ")
                else:
                    if enemy_health > 300:
                        if player_health > 750:
                            enemy_move = moves["Excalibur"]
                            print("\nDemon Knight swings her Devilish Dagger. It deals %s damage." % (
                                enemy_move))
                        elif player_health > 350 and player_health <= 750:  # computer decides whether to go big or play it safe
                            imoves = ["Excalibur", "Divine Light"]
                            imoves = random.choice(imoves)
                            enemy_move = moves[imoves]
                            print("\nDemon Knight uses %s. It deals %s damage" %
                                  (imoves, enemy_move))
                        elif player_health <= 350:
                            enemy_move = moves["Divine Light"]  # FINISH HIM!
                            print("\nDemon Knight opens the ground and releases Hellfire. It deals %s damage." % (
                                enemy_move))
                    else:  # if the computer has less than 300 health, there is a 50% chance they will heal
                        heal_or_fight = random.randint(1, 2)
                        if heal_or_fight == 1:
                            heal_up = True
                            enemy_move = moves["Potion"]
                            print(
                                "\nDemon Knight uses a bandage. It heals %s damage." % (enemy_move))
                        else:
                            if player_health > 750:
                                enemy_move = moves["Excalibur"]
                                print("\nDemon Knight swings her Devilish Dagger. It deals %s damage." % (
                                    enemy_move))
                            elif player_health > 350 and player_health <= 750:
                                imoves = ["Excalibur", "Divine Light"]
                                imoves = random.choice(imoves)
                                enemy_move = moves[imoves]
                                print("\nDemon Knight uses %s and deals %s " %
                                      (imoves, enemy_move))
                            elif player_health <= 350:
                                # FINISH HIM!
                                enemy_move = moves["Divine Light"]
                                print("\nDemon Knight opens the ground and releases Hellfire. It deals %s damage." % (
                                    enemy_move))
            if heal_up:
                if player_turn:
                    player_health += player_move
                    if player_health > 1000:
                        player_health = 1000  # cap max health at 1000. No over healing!
                else:
                    enemy_health += enemy_move
                    if enemy_health > 1000:
                        enemy_health = 1000
            else:
                if player_turn:
                    enemy_health -= player_move
                    if enemy_health < 0:
                        enemy_health = 0  # cap minimum health at 0
                        winner = "Player"
                        break
                else:
                    player_health -= enemy_move
                    if player_health < 0:
                        player_health = 0
                        winner = "Enemy"
                        break
            print(f'''
            Player Health: {player_health}
            Enemy Health: {enemy_health}
            ''')
            # switch turns
            player_turn = not player_turn
            enemy_turn = not enemy_turn
        # once main game while loop breaks, determine winner and congratulate
        if winner == "Player":
            print("\nWe have a Champion! You did it!")
        else:
            print("\nYou have fallen in battle. The land is in ruins... Shucks.")
        print("\nGo for another round? (Y/N)")
        answer = input("> ").lower()
        if answer not in ("yes", "y"):
            play_again = False
story()