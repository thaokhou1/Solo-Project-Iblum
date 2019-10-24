
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "firstname"  VARCHAR (80) UNIQUE NOT NULL,
    "email" VARCHAR (120) UNIQUE NOT NULL,
     "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "picture" (

"id" SERIAL PRIMARY KEY,
"image" TEXT,
"date" DATE,
"location" VARCHAR (300),
"audio" TEXT,
"user_id" VARCHAR 

);