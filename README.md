# 🎌 Anime Database 

A RESTful API built with Node.js, Express, and MongoDB that manages anime, characters, and reviews.
This project demonstrates database modeling, relationships, CRUD operations, validation, and indexing.
I used rowdy- logger to make sure I have all my paths connected and works.

## 🚀 Features

- 3 MongoDB collections:

- Anime

- Characters

- Reviews

- Full CRUD operations

- Data validation using Mongoose

- Indexed fields for performance

- Relationships using ObjectId references

- Error handling middleware

- Seed script for sample data

## 🛠 Tech Stack

- Node.js

- Express

- MongoDB

- Mongoose

- Dotenv

- rowdy-logger

## 🎬 Anime Routes

| Method | Route        | Description     |
| ------ | ------------ | --------------- |
| GET    | `/anime`     | Get all anime   |
| GET    | `/anime/:id` | Get anime by ID |
| POST   | `/anime`     | Create anime    |
| PATCH  | `/anime/:id` | Update anime    |
| DELETE | `/anime/:id` | Delete anime    |

## Character Routes

| Method | Route             | Description         |
| ------ | ----------------- | ------------------- |
| GET    | `/characters`     | Get all characters  |
| GET    | `/characters/:id` | Get character by ID |
| POST   | `/characters`     | Create character    |
| PATCH  | `/characters/:id` | Update character    |
| DELETE | `/characters/:id` | Delete character    |

## ⭐ Review Routes

| Method | Route          | Description      |
| ------ | -------------- | ---------------- |
| GET    | `/reviews`     | Get all reviews  |
| GET    | `/reviews/:id` | Get review by ID |
| POST   | `/reviews`     | Create review    |
| PATCH  | `/reviews/:id` | Update review    |
| DELETE | `/reviews/:id` | Delete review    |

