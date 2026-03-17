# Mini COVALO

My take on a Covalo-style product platform.
This repository contains my solution for a fullstack technical challenge that was presented to me.

Covalo is a platform that connects ingredient suppliers with cosmetic companies, helping brands discover and source ingredients for their formulations. Having previously studied at the Faculty of Pharmaceutical Sciences, the cosmetic and ingredient space is something I find genuinely interesting. For that reason, working on this challenge was particularly enjoyable.

And of course — Covalo’s mascot is a flamingo 🦩

A group of flamingos is called a *flock*, so this project is my attempt at joining the flock!


## Business Logic
Business logic is implemented in the service layer.

Relations:
User → belongs to a Company  
Company → manages Products  
Product → is associated with a Company  


## Features

- List all products
- View product details
- Search products by name
- Create new products
- Update existing products
- Connect a Spring Boot backend to a React frontend
- Persist product data with PostgreSQL


## Requirements

- Java 17  
- Spring Boot 3.x  
- Node.js 24.14.0  
- npm 11.9.0  
- PostgreSQL 16.13  
- Maven Wrapper 



## Design Notes

The project was designed to stay simple, clear and easy to extend.

Core product flows (listing, details, search, creation and update) were implemented first to ensure the main functionality of the application.

Search was initially implemented client-side to validate UI behaviour. In the final version it is exposed through a backend endpoint (`/products/search`) for a more scalable architecture.

CORS is enabled to allow the local React frontend to communicate with the API during development.



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
./mvnw spring-boot:run
```

The backend API will run on:
http://localhost:8080


## Running the Frontend

```bash
cd front
npm install
npm run dev
```
Runs on http://localhost:5173(or next available port)


## Main API Endpoints

GET /products -> List all products

GET /products/{id} -> Product details

GET /products/search -> Search products by name

POST /products -> Create a product

PUT /products/{id} -> Update a product


## Admin API Endpoints

### Companies
GET /companies -> List companies  
POST /companies -> Create a company  
PUT /companies/{id} -> Update a company  

### Users
GET /users -> List users  
GET /users/{id} -> Get user details  
POST /users -> Create a user  
PUT /users/{id} -> Update a user (including role)


## Testing 

The backend includes a basic Spring Boot context load test to validate that the application starts correctly and the main configuration is working as expected

Run tests with:

```bash
cd back
./mvnw test
```


# Testing with Postman

A Postman collection is included to test the API endpoints.

It can be imported directly into Postman to validate the API behaviour and quickly test the main product flows.



## Architecture Notes

The backend follows a layered architecture (MVC). This separation improves maintainability and scalability.

- Controller: handles HTTP requests and responses  
- Service: contains business logic  
- Repository: manages database access  



The design follows some SOLID principles:

- **Single Responsibility Principle**: each layer has a clear responsibility.  
- **Dependency Inversion Principle**: Spring Boot uses Inversion of Control (IoC) to inject dependencies (`@Service`, `@Repository`), promoting loose coupling.  
- **Open/Closed Principle**: new logic can be added in the service layer without modifying existing code. On the frontend, reusable components (e.g. `ProductCard`, `PageHeader`) support extension without changes.


Spring Data JPA is used for database interaction.
The frontend is structured into pages, components, services and types to separate UI and API logic.
The API follows a REST-style CRUD approach.


Roles (SUPER_ADMIN, COMPANY_ADMIN) are defined in the domain. Authentication and authorization are not implemented yet and are planned as future improvements.


The architecture also uses common design patterns:

- **Repository Pattern**: abstracts database access via Spring Data JPA  
- **Component-based design (frontend)**: reusable React components



##  Future Improvements

Possible improvements for the project could include: pagination for product lists, improved UI styling and responsiveness, authentication and authorization, admin features for managing companies and users and more tests. Also improve product URLs to be more user-friendly (e.g. `/product/retinol-serum` instead of `/product/3`)


