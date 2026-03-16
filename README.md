# Mini COVALO

My take on a Covalo-style product platform.
This repository contains my solution for a fullstack technical challenge that was presented to me.

Covalo is a platform that connects ingredient suppliers with cosmetic companies, helping brands discover and source ingredients for their formulations. Having previously studied at the Faculty of Pharmaceutical Sciences, the cosmetic and ingredient space is something I find genuinely interesting. For that reason, working on this challenge was particularly enjoyable.

And of course — Covalo’s mascot is a flamingo 🦩

A group of flamingos is called a *flock*, so this project is my attempt at joining the flock!



## Features

- List all products
- View product details
- Search products by name
- Create new products
- Update existing products
- Connect a Spring Boot backend to a React frontend
- Persist product data with PostgreSQL


# Tech stack
## Backend

- Java 17
- Spring Boot
- PostgreSQL
- Maven

## Frontend

- React
- TypeScript
- Vite

## Project structure


## Design Notes

Some decisions were made to keep the project simple, clear and easy to extend:

- The backend follows a layered architecture to separate responsibilities between controller, service and repository.
- The frontend is organized into pages, reusable components, services and types to keep concerns separated.
- I prioritized delivering the core product flows first: listing, details, search, creation and update.
- The goal was to keep the implementation readable and practical, while leaving room for future improvements.


## Running the Backend

```bash
cd back
mvn spring-boot:run
```

The backend API will run on:
http://localhost:8080

## Running the Frontend

```bash
cd front
npm install
npm run dev
```


## Main API Endpoints

GET /products → List all products

GET /products/{id} → Product details

GET /products/search → Search products by name

POST /products → Create a product

PUT /products/{id} → Update a product

# Testing with Postman

A Postman collection is included to test the API endpoints.

It can be imported directly into Postman to validate the API behaviour and quickly test the main product flows.

Architecture Notes

The backend follows a layered architecture:

Controller → handles HTTP requests

Service → contains business logic

Repository → manages database access

This separation keeps the project easier to read, maintain and extend.

On the frontend, the code is organized into pages, reusable components, services and types for better separation of concerns.

##  Future Improvements


##  Interface preview

