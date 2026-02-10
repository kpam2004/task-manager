# Fullstack Task Manager App

A full-stack task management application built using React, Node.js, Express, and MongoDB.

## Features

- User authentication (JWT)
- Register / Login
- Protected dashboard
- Create tasks
- Delete tasks
- Mark tasks as completed
- Search tasks
- Responsive Tailwind UI

## Tech Stack

Frontend:
- React
- Tailwind CSS
- Axios

Backend:
- Node.js
- Express
- MongoDB
- JWT Authentication
- bcrypt

## How to Run

### Backend
cd task-manager-backend
npm install
npm start

### Frontend
cd task-manager-frontend
npm install
npm start

## API Endpoints

POST /auth/register  
POST /auth/login  
GET /tasks  
POST /tasks  
PUT /tasks/:id  
DELETE /tasks/:id  

## How this app can scale

- Deploy backend using Docker & Kubernetes
- Add Redis caching
- Use load balancers
- Database indexing & sharding
- Microservices architecture
