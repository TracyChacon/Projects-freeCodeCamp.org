# Celestial Bodies Database

This project is a database of celestial bodies, created using PostgreSQL. The database contains four tables: galaxy, star, planet, and moon. Each table has a primary key, and each "star" and "planet" has a foreign key that references one of the rows in galaxy.

## REBUILD

To rebuild the database, you can use the following commands:

1. sudo su postgres (if super user needs to change roles)
2. psql -U postgres < universe.sql
3. psql --username=<your_username_for_database> --dbname=universe
4. \c universe

## SUMMARY

The universe.sql file contains the SQL commands to create the database and populate it with data.

The database contains the following tables:

galaxy (id, name, description)
star (id, name, galaxy_id, age_in_millions_of_years)
planet (id, name, star_id, has_life)
moon (id, name, planet_id)
The galaxy table stores information about galaxies, such as their name and description. The star table stores information about stars, such as their name, galaxy, and age. The planet table stores information about planets, such as their name, star, and whether or not they have life. The moon table stores information about moons, such as their name and planet.

The database is designed to be used for a variety of purposes, such as storing information about the universe, conducting research, or creating visualizations.

## Author

This project was created by Tracy Chacon.

## License

This project is licensed under the MIT License.
