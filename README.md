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


# Tools
Maven
Node.js
npm



## Environment Requirements

Java:
17.0.18

Spring Boot:
3.5.11

Node.js:
24.14.0

npm:
11.9.0

PostgreSQL:
16.13

Maven:
Maven Wrapper (./mvnw) included in the project



## Project 
The project was developed and tested with:
- Java 17
- Spring Boot 3


## Architecture Notes


## Design Notes

Some decisions were made to keep the project simple, clear and easy to extend:

- The backend follows a layered architecture to separate responsibilities between controller, service and repository.
- The frontend is organized into pages, reusable components, services and types to keep concerns separated.
- I prioritized delivering the core product flows first: listing, details, search, creation and update.
- The goal was to keep the implementation readable and practical, while leaving room for future improvements.


## Structure
```
.
├── README.md
├── back
│   ├── HELP.md
│   ├── mvnw
│   ├── mvnw.cmd
│   ├── pom.xml
│   └── src
│       ├── main
│       └── test
└── front
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.svg
    │   └── icons.svg
    ├── src
    │   ├── App.css
    │   ├── App.tsx
    │   ├── assets
    │   ├── components
    │   ├── index.css
    │   ├── main.tsx
    │   ├── pages
    │   ├── services
    │   └── types
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

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

GET /products -> List all products

GET /products/{id} -> Product details

GET /products/search -> Search products by name

POST /products -> Create a product

PUT /products/{id} -> Update a product


## Testing 

The backend includes a basic Spring Boot context-load test to validate that the application starts correctly and the main configuration is working as expected

Run tests with:

```bash
cd back
./mvnw test
```


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

Possible improvements for the project could include: pagination for product lists, improved UI styling and responsiveness, authentication, admin features for managing companies and users and more tests



##  Interface preview
Let´s take a look at the pages
