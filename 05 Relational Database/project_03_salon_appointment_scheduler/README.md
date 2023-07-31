# Salon Appointment Scheduler

## Competencies Needed to Build Project

- Knowledge of the SQL language
- Knowledge of the world cup data set
- Problem-solving skills
- Coding skills
- Strong communication skills

## Rebuild

To rebuild the database, you can use the following commands:

1. sudo su postgres (if super user needs to change roles)
2. psql -U postgres < salon.sql
3. psql --username=<your_username_for_database> --dbname=salon
4. \c salon

## `salon.sh`
The shell script is a simple appointment scheduler for a salon. The script first prompts the user to select a service from a list of five options: cut, color, perm, style, or trim. The script then prompts the user to enter their phone number. If the user's phone number is not already in the database, the script will add the user's phone number and name to the database. The script then prompts the user to enter the time of their appointment. The script then inserts a new row into the appointments table in the database, with the user's phone number, the service ID, and the appointment time.

The shell script uses the psql command to interact with the database. The psql command is a command-line interface for PostgreSQL. The psql command allows you to execute SQL queries and commands from the command line.

The shell script is well-formatted and easy to read. The comments in the script provide helpful explanations of what the code is doing. The shell script is also modular, with each function performing a specific task. This makes the shell script easy to understand and modify.

Here is a breakdown of the main features of the shell script:

The MAIN_MENU() function displays the main menu of the script and prompts the user to select a service.
The APPOINTMENT_MENU() function prompts the user to enter their phone number and the time of their appointment. The function then inserts a new row into the appointments table in the database.
The psql command is used to interact with the database.
The shell script is well-formatted and easy to read.
The shell script is modular, with each function performing a specific task.
