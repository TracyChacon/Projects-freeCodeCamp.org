#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

N=$(( RANDOM %1000 + 1 ))

MAIN_FUNC() {
    echo -e "/n"
    echo "Enter your username:"
    read USERNAME_ENTERED

    USERNAME=$($PSQL "SELECT username FROM users WHERE username='$USERNAME_ENTERED'")
    
    if [[ -z $USERNAME ]]; then
        echo "Welcome, $USERNAME_ENTERED! It looks like this is your first time here."
    fi
}

MAIN_FUNC

