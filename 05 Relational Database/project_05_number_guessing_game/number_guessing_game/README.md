# Number Guessing Game

## Competencies Needed to Build Project

- Knowledge of the SQL language
- Working knowledge of database manipulation
- Problem-solving skills
- Coding skills
- Strong communication skills

## Rebuild

To rebuild the database, you can use the following commands:

1. sudo su postgres (if super user needs to change roles)
2. psql -U postgres < number_guess.sql
3. psql --username=<your_username_for_database> --dbname=number_guess
4. \c number_guess 

## Summary
The code is a bash script that implements a number guessing game. The game first asks the user to enter their username. If the username is already in the database, the script will update the user's games played and best game statistics. If the username is not in the database, the script will create a new user record.

Once the user has been authenticated, the script generates a random number between 1 and 1000. The script then prompts the user to guess the secret number. The user is given unlimited guesses to try to guess the secret number. After each guess, the script tells the user whether their guess was too high, too low, or correct.

If the user guesses the secret number, the script displays a message congratulating the user and showing the number of guesses it took. The script also updates the user's best game statistics if the number of guesses is lower than the user's previous best game.

The code uses the psql command to interact with the number_guess database. The psql command is a command-line tool that allows users to interact with PostgreSQL databases.
