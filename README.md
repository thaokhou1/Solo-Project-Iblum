
# i-blum
i-blum is a full-stack react application built to help users store their pictures along with voice clips in privacy.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

### Installing

Steps to get the development environment running.

1. Download this project.
2. Create a database named `prime_app` If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`
3. Run the SQL code from the file named `database.sql` in the project
4.Start postgres if not running already by using `brew services start postgresql`
6.* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
7. In terminal, type: `npm install`
8. In terminal, type: `npm run client`
9. In terminal, type: `npm run server`

## Deployment

You can deploy this application as long as you also have the database side deployed.

## Built With

- React
- Redux
- Express
- Passpor
- PostgreSQL
- Moment.js


## Authors

* **Khou Thao** -(https://github.com/thaokhou1)



## Acknowledgments

* Thank you to Prime Academy
* Thank you to Porta

