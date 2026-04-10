# BizManager SaaS - Backend

Backend API for BizManager SaaS, a business management platform designed to handle user authentication and protected user data access.

## Features

- User registration
- User login with JWT
- Password hashing with bcrypt
- Protected routes with authentication middleware
- Authenticated user profile route
- PostgreSQL database with Prisma ORM
- Dockerized local environment with Docker Compose

## Tech Stack

- Node.js
- Express
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT
- bcrypt
- Docker
- Docker Compose

## Main Endpoints

### Health Check
`GET /health`

### Register User
`POST /users/register`

### Login
`POST /users/login`

### Authenticated Profile
`GET /me`

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
DATABASE_URL="postgresql://admin:admin@localhost:5432/bizmanager?schema=public"
JWT_SECRET="supersecretkey"

## With Docker
docker compose up --build

🧪 Test User Example
{
  "email": "victordocker@email.com",
  "password": "123456"
}

📌 Main Routes
POST /users/register
POST /users/login
GET /me
GET /health

👨‍💻 Author

Victor Bueno