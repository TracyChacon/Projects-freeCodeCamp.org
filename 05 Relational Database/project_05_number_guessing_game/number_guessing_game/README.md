[BACK TO MAIN](https://github.com/TracyChacon)


# Number Guessing Game

## Compentencies Needed to Build Project
- Knowledge of SQL. The code above is written in SQL, so a good understanding of the language is needed. This includes knowledge of the different types of data that can be stored in a database, as well as the different types of queries that can be used to access and manipulate that data.
- Knowledge of database design. This code above creates a number of tables, and a good understanding of how to design a database that is both efficient and easy to use is required. This includes knowledge of the different types of relationships that can exist between tables, as well as the different ways to optimize queries.
- Problem-solving skills. The code above solves a number of problems, such as how to calculate the gravity of a moon and how to determine whether a planet is in the habitable zone. A way to identify the problems that need to be solved and then develop efficient and effective solutions is needed.
- Coding skills. The code above is well-written and easy to read. Must have good coding skills in order to write code that is both efficient and readable.

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
