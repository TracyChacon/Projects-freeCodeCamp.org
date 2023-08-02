#!/bin/bash
PSQL="psql --username=freecodecamp --dbname=periodic_table -t --no-align -c"

if [[ -z $1 ]]; then
    echo "Please provide an element as an argument."
else
    if [[ $1 =~ ^[0-9]+$ ]]; then
        ATOMIC_NUMBER=$1
        ELEMENT_NAME=$($PSQL "SELECT name FROM elements WHERE atomic_number=$ATOMIC_NUMBER")
        ELEMENT_SYMBOL=$($PSQL "SELECT symbol FROM elements WHERE atomic_number=$ATOMIC_NUMBER")
    elif [[ $1 =~ ^[A-Z]$ ]] || [[ $1 =~ ^[A-Z][a-z]$ ]]; then
        ELEMENT_SYMBOL=$1
        ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE symbol='$ELEMENT_SYMBOL'")
        ELEMENT_NAME=$($PSQL "SELECT name FROM elements WHERE symbol='$ELEMENT_SYMBOL'")
    elif [[ $1 =~ ^[A-Z][a-z]+$ ]]; then
        ELEMENT_NAME=$1
        ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE name='$ELEMENT_NAME'")
        ELEMENT_SYMBOL=$($PSQL "SELECT symbol FROM elements WHERE name='$ELEMENT_NAME'")
    fi

    ATOMIC_MASS=$($PSQL "SELECT atomic_mass FROM properties FULL JOIN elements USING(atomic_number) WHERE atomic_number = $ATOMIC_NUMBER")
    
    if [[ -z $ATOMIC_MASS ]]; then
        echo "I could not find that element in the database."
    else
        ELEMENT_MELTING_POINT=$($PSQL "SELECT melting_point_celsius FROM properties FULL JOIN elements USING(atomic_number) WHERE atomic_number = $ATOMIC_NUMBER")
        ELEMENT_BOILING_POINT=$($PSQL "SELECT boiling_point_celsius FROM properties FULL JOIN elements USING(atomic_number) WHERE atomic_number = $ATOMIC_NUMBER")
        ELEMENT_TYPE=$($PSQL "SELECT type FROM types FULL JOIN properties USING(type_id) WHERE atomic_mass = $ATOMIC_MASS")

        echo  "The element with atomic number $ATOMIC_NUMBER is $ELEMENT_NAME ($ELEMENT_SYMBOL). It's a $ELEMENT_TYPE, with a mass of $ATOMIC_MASS amu. $ELEMENT_NAME has a melting point of $ELEMENT_MELTING_POINT celsius and a boiling point of $ELEMENT_BOILING_POINT celsius."
    fi
fi



