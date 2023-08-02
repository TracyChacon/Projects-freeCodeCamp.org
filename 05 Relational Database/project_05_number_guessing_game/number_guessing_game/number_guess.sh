#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

N=$(( RANDOM %1000 + 1 ))