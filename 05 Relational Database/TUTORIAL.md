# Celestial Bodies Database

> Welcome! Are you ready to build a database of the universe?

## 1. Instructions

For this project, you need to log in to PostgreSQL with psql to create your database. Do that by entering `psql --username=freecodecamp --dbname=postgres` in the terminal. Make all the tests below pass to complete the project. Be sure to get creative, and have fun!

**Don't forget to connect to your database after you create it** :smile:

Here's some ideas for other column and table names: `description`, `has_life`, `is_spherical`, `age_in_millions_of_years`, `planet_types`, `galaxy_types`, `distance_from_earth`.

**Notes:**
If you leave your virtual machine, your database may not be saved. You can make a dump of it by entering `pg_dump -cC --inserts -U freecodecamp universe > universe.sql` in a bash terminal (not the psql one). It will save the commands to rebuild your database in `universe.sql`. The file will be located where the command was entered. If it's anything inside the `project` folder, the file will be saved in the VM. You can rebuild the database by entering `psql -U postgres < universe.sql` in a terminal where the `.sql` file is.

If you are saving your progress on freeCodeCamp.org, after getting all the tests to pass, follow the instructions above to save a dump of your database. Save the `universe.sql` file in a public repository and submit the URL to it on freeCodeCamp.org.

### 1.1

Complete the tasks below

#### SUBTASKS

- [x] You should create a database named `universe`
- [x] Be sure to connect to your database with `\c universe`. Then, you should add tables named `galaxy`, `star`, `planet`, and `moon`
- [x] Each table should have a primary key
- [x] Each primary key should automatically increment
- [x] Each table should have a `name` column
- [x] You should use the `INT` data type for at least two columns that are not a primary or foreign key
- [x] You should use the `NUMERIC` data type at least once
- [x] You should use the `TEXT` data type at least once
- [x] You should use the `BOOLEAN` data type on at least two columns
- [x] Each "star" should have a foreign key that references one of the rows in `galaxy`
- [x] Each "planet" should have a foreign key that references one of the rows in `star`
- [x] Each "moon" should have a foreign key that references one of the rows in `planet`
- [x] Your database should have at least five tables
- [ ] Each table should have at least three rows+
- [x] The `galaxy` and `star` tables should each have at least six rows
- [x] The `planet` table should have at least 12 rows
- [x] The `moon` table should have at least 20 rows
- [x] Each table should have at least three columns
- [x] The `galaxy`, `star`, `planet`, and `moon` tables should each have at least five columns
- [x] At least two columns per table should not accept `NULL` values
- [x] At least one column from each table should be required to be `UNIQUE`
- [x] All columns named `name` should be of type `VARCHAR`
- [x] Each primary key column should follow the naming convention `table_name_id`. For example, the `moon` table should have a primary key column named `moon_id`
- [x] Each foreign key column should have the same name as the column it is referencing
