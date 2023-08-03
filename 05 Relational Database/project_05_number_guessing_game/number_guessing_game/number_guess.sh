#! /bin/bash
PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

# USER START SECTION
echo "Enter your username:"
read USERNAME_ENTERED

USERNAME=$($PSQL "SELECT username FROM users WHERE username='$USERNAME_ENTERED'")


if [[ -n $USERNAME ]]
then
    GAMES_PLAYED=$($PSQL "SELECT games_played FROM users WHERE username='$USERNAME'")
    BEST_GAME=$($PSQL "SELECT best_game FROM users WHERE username='$USERNAME'")

    echo $($PSQL "UPDATE users SET games_played = 1 + $GAMES_PLAYED WHERE username='$USERNAME'")

    echo "Welcome back, $USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses."

else
    USERNAME=$USERNAME_ENTERED
    echo $($PSQL "INSERT INTO users(username) VALUES('$USERNAME')")

    echo $($PSQL "UPDATE users SET games_played = 1 WHERE username='$USERNAME'")

    echo "Welcome, $USERNAME! It looks like this is your first time here."
fi



# GAME SECTION

SECRET_NUMBER=$(( RANDOM %1000 + 1 ))

# echo "$SECRET_NUMBER is the number"

echo "Guess the secret number between 1 and 1000:"

until [[ $USER_INPUT == $SECRET_NUMBER ]]
do
    let NUMBER_OF_GUESSES+=1
    
    read USER_INPUT

    if [[ ! $USER_INPUT =~ ^[0-9]+$ ]]
    then
        echo "That is not an integer, guess again:"
    elif [[ $USER_INPUT > $SECRET_NUMBER ]]
    then
        echo "It's lower than that, guess again:"
    elif [[ $USER_INPUT < $SECRET_NUMBER ]]
    then
        echo "It's higher than that, guess again:"
    fi 
done

if [[ -z $BEST_GAME ]] || [[ $NUMBER_OF_GUESSES < $BEST_GAME ]]; then
    echo $($PSQL "UPDATE users SET best_game = $NUMBER_OF_GUESSES WHERE username='$USERNAME'")
fi

echo "You guessed it in $NUMBER_OF_GUESSES tries. The secret number was $SECRET_NUMBER. Nice job!"
