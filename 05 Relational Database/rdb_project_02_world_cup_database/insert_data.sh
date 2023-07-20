#! /bin/bash

if [[ $1 == "test" ]]
then
  PSQL="psql --username=postgres --dbname=worldcuptest -t --no-align -c"
else
  PSQL="psql --username=freecodecamp --dbname=worldcup -t --no-align -c"
fi

# Do not change code above this line. Use the PSQL variable above to query your database.


echo -e "\n~~Insert worldcup data~~\n"

echo "$($PSQL "TRUNCATE TABLE games, teams")"

cat games.csv | while IFS="," read YEAR ROUND WINNER OPPONENT WINNING_GOALS OPPONENT_GOALS
do
    if [ $YEAR != year ]; then 
        TEAM_ID_W=$($PSQL "SELECT team_id FROM teams WHERE name='$WINNER'")
        TEAM_ID_O=$($PSQL "SELECT team_id FROM teams WHERE name='$OPPONENT'")
        # TEAM_ID=($TEAM_ID_W $TEAM_ID_O)
        # echo WINNER $WINNER ${TEAM_ID[0]}
        # echo OPPONENT $OPPONENT ${TEAM_ID[1]}
       
     
        if  [[ -z $TEAM_ID_W  ]]; then
            INSERT_O_TEAM=$($PSQL "INSERT INTO teams(name) VALUES('$WINNER')")

            if [[ $INSERT_W_TEAM == "INSERT 0 1" ]]; then
                echo "Inserted into teams, $WINNER"
            fi
        fi
        if [[ -z $TEAM_ID_O ]]; then
            INSERT_W_TEAM=$($PSQL "INSERT INTO teams(name) VALUES('$OPPONENT')")

            if [[ $INSERT_O_TEAM == "INSERT 0 1" ]]; then
                echo "Inserted into teams, $OPPONENT"
            fi
        fi


        WINNER_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$WINNER'")
        OPPONENT_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$OPPONENT'")

        INSERT_GAMES_RESULTS=$($PSQL "INSERT INTO games(year, round, winner_id, opponent_id, winner_goals, opponent_goals) VALUES($YEAR, '$ROUND', $WINNER_ID, $OPPONENT_ID, $WINNING_GOALS, $OPPONENT_GOALS)")

        if [[ $INSERT_GAMES_RESULTS == "INSERT 0 1" ]];  then
            echo "Inserted into games, $YEAR, '$ROUND', $WINNER_ID, $OPPONENT_ID, $WINNING_GOALS, $OPPONENT_GOALS" 
        fi
    fi
done
    