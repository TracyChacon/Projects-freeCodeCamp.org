# Worldcup Database and Shell Scripts

## Competencies Needed to Build Project

- Knowledge of the SQL language
- Knowledge of the world cup data set
- Problem-solving skills
- Coding skills
- Strong communication skills

## REBUILD

To rebuild the database, you can use the following commands:

1. sudo su postgres (if super user needs to change roles)
2. psql -U postgres < universe.sql
3. psql --username=<your_username_for_database> --dbname=universe
4. \c universe

### Postgres Database
The games table contains information about the games played in the 2018 and 2014 FIFA World Cups. Each game has a unique ID, the year it was played, the round of the tournament it was played in, the IDs of the two teams that played, and the number of goals scored by each team.
The teams table contains information about the teams that participated in the 2018 and 2014 FIFA World Cups. Each team has a unique ID and a name.
Some interesting facts that can be inferred from the data include:

France won the 2018 FIFA World Cup, defeating Croatia in the final.
Germany won the 2014 FIFA World Cup, defeating Argentina in the final.
The most goals scored in a single game was 7, which was scored by Brazil against Spain in the 2014 FIFA World Cup.
The most goals scored by a single team in a single tournament was 22, which was scored by Germany in the 2014 FIFA World Cup.

### queries.sh File
The script first defines a variable called PSQL that contains the command to run SQL queries on the worldcup database. The queries are then run one by one, and the results are printed to the console.

The script can be used to answer a variety of questions about the world cup data set. For example, you could use it to find out the most goals scored in a single game, the number of games where the winning team scored more than two goals, or the list of teams that played in the 2014 'Eighth-Final' round.

To run the script, you will need to have the psql command-line tool installed. You can then run the script by saving it as a file and then running the following command from the command line:

