# Travlr

Tralvl is a Flickr clone, created to cater to all thing travle related!

[MVP List](https://github.com/GabeS97/travlr/wiki/MVP-feature-list) |
[DB Schema](https://github.com/GabeS97/travlr/wiki/DB-Schema) | [Live Site](https://travlrbygabriel.herokuapp.com/)

# Technologies Used

>* Javascript
>* Express
>* React
>* Redux
>* Sequelize
>* PostgreSQL
>* CSS
>* Heroku

# Getting Started

1. Clone this repository

2. git clone https://github.com/GabeS97/travlr

3. cd into the backend directory and install dependencies

4. cd into the frontend directory and install dependencies

5. Create a .env file using the follwing format

     PORT=5000
     DB_USERNAME=auth_app
     DB_PASSWORD= <create password>
     DB_DATABASE=auth_db
     DB_HOST=localhost
     JWT_SECRET= <enter secret token>
     JWT_EXPIRES_IN=604800

6. Create a user in psql based on what the foramt given above:

7. Enter psql onto your terminal and create a user using the follwing command:

8. "CREATE USER <username> PASSWORD '<password>' CREATEDB"

9. Create the database, migrate, and seed

10. npx dotenv sequelize db:create

11. npx dotenv sequelize db:migrate

12. npx dotenv sequelize db:seed:all

13. Open up two terminals one for the backend and another for the frontend directories, npm start on each terminal

14. Sign in or you may use demo id to access the ewebstie
