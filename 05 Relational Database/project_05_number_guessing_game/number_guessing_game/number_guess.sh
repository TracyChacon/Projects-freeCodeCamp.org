#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"


MAIN_FUNC() {
    echo "Enter your username:"
    read USERNAME_ENTERED

    USERNAME=$($PSQL "SELECT username FROM users WHERE username='$USERNAME_ENTERED'")
    
    if [[ -z $USERNAME ]]; then
        echo $($PSQL "INSERT INTO users(username) values('$USERNAME_ENTERED')")

        echo "Welcome, $USERNAME_ENTERED! It looks like this is your first time here."
    else
        USER_ID=$($PSQL "SELECT user_id FROM users WHERE username='$USERNAME'")
        GAMES_PLAYED=$($PSQL "SELECT games_played FROM stats WHERE user_id=$USER_ID")
        BEST_GAME=$($PSQL "SELECT best_game FROM stats WHERE user_id=$USER_ID")

        echo "Welcome back, $USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses."
    fi

    GAME
}

GAME() {
    USER_INPUT=0
    N=$(( RANDOM %1000 + 1 ))
    
    echo "Guess the secret number between 1 and 1000:"

    until [[ $USER_INPUT == $N ]]; do
        read USER_INPUT

        if [[ $USER_INPUT > $N ]]; then
            echo "It's lower than that, guess again:"
        elif [[ $USER_INPUT < $N ]]; then
            echo "It's higher than that, guess again:"
        fi 
    done
}

MAIN_FUNC

