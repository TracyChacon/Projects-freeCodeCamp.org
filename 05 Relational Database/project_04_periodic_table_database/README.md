
## Compentencies Needed to Build Project
- Knowledge of SQL. The code above is written in SQL, so a good understanding of the language is needed. This includes knowledge of the different types of data that can be stored in a database, as well as the different types of queries that can be used to access and manipulate that data.
- Knowledge of database design. This code above creates a number of tables, and a good understanding of how to design a database that is both efficient and easy to use is required. This includes knowledge of the different types of relationships that can exist between tables, as well as the different ways to optimize queries.
- Problem-solving skills. The code above solves a number of problems, such as how to calculate the gravity of a moon and how to determine whether a planet is in the habitable zone. A way to identify the problems that need to be solved and then develop efficient and effective solutions is needed.
- Coding skills. The code above is well-written and easy to read. Must have good coding skills in order to write code that is both efficient and readable.

## Rebuild

To rebuild the database, you can use the following commands:

1. sudo su postgres (if super user needs to change roles)
2. psql -U postgres < number_guess.sql
3. psql --username=<your_username_for_database> --dbname=periodic_table
4. \c periodic_table

## Summary
The code is a bash script that takes an element as an argument and prints out information about the element, including its atomic number, name, symbol, atomic mass, melting point, and boiling point.

The script first checks if the user has provided an argument. If the user has not provided an argument, the script prints out a message asking the user to provide an element as an argument.

If the user has provided an argument, the script checks if the argument is a valid atomic number, symbol, or name of an element. If the argument is a valid atomic number, the script uses the psql command to query the periodic_table database to get the element's name and symbol. If the argument is a valid symbol, the script uses the psql command to query the periodic_table database to get the element's atomic number and name. If the argument is a valid name, the script uses the psql command to query the periodic_table database to get the element's atomic number and symbol.

Once the script has determined the element's atomic number, it uses the psql command to query the properties database to get the element's atomic mass, melting point, and boiling point.

Finally, the script prints out a message with the element's information.
