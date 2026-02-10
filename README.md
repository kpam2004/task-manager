# Fullstack Task Manager App

A full-stack task management application built using React, Node.js, Express, and MongoDB. Manage your daily tasks efficiently with user authentication, task creation, editing, and completion tracking.

## Features

- User authentication with JWT
- Create, read, update, and delete tasks
- Mark tasks as completed
- Search and filter tasks
- Protected dashboard (authentication required)
- Responsive Tailwind UI

## Tech Stack

**Frontend:**
- React
- Tailwind CSS
- Axios
- React Hooks

**Backend:**
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Mongoose (MongoDB ODM)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)
- Git

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/kpam2004/task-manager.git
cd task-manager
```

### 2. Setup Backend

```bash
cd task-manager-backend
npm install
```

Create a `.env` file in the `task-manager-backend` directory:
```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/?appName=appName
JWT_SECRET=your_secret_key_here
```

Start the backend server:
```bash
npm start
```
The backend will run on `http://localhost:5000`

### 3. Setup Frontend

```bash
cd task-manager-frontend
npm install
```

Start the frontend development server:
```bash
npm start
```
The frontend will run on `http://localhost:3000`

## Project Structure

```
task-manager/
├── task-manager-backend/          # Express API
│   ├── models/                    # Schema definitions
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/                    # API routes
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── middleware/                # Custom middleware
│   │   └── authMiddleware.js
│   ├── server.js                  # Main server file
│   ├── package.json
│   └── .env                       # Environment variables
│
├── task-manager-frontend/         # React app
│   ├── src/
│   │   ├── pages/                 # Page components
│   │   │   ├── Dashboard.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── api.js                 # API calls
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── README.md
```

## API Endpoints

### Authentication

**POST** `/auth/register`
- Register a new user
- Request: `{ email, password, name }`
- Response: `{ token, user }`

**POST** `/auth/login`
- Login user
- Request: `{ email, password }`
- Response: `{ token, user }`

### Tasks (All require authentication)

**GET** `/tasks`
- Fetch all tasks for the logged-in user
- Response: `{ tasks: [] }`

**POST** `/tasks`
- Create a new task
- Request: `{ title, description }`
- Response: `{ task }`

**PUT** `/tasks/:id`
- Update a task
- Request: `{ title, description, completed }`
- Response: `{ task }`

**DELETE** `/tasks/:id`
- Delete a task
- Response: `{ message: "Task deleted" }`

## How to Run

**Option 1: Run both servers concurrently**

Terminal 1 - Backend:
```bash
cd task-manager-backend
npm start
```

Terminal 2 - Frontend:
```bash
cd task-manager-frontend
npm start
```

**Option 2: Using npm scripts (if configured)**
```bash
npm run dev  # Runs both simultaneously (requires concurrently package)
```

## Environment Variables

### Backend (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://...` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_secret_key` |

## Troubleshooting

**MongoDB Connection Error**
- Verify your MongoDB connection string is correct
- Check if MongoDB Atlas IP whitelist includes your IP
- Ensure credentials are URL-encoded if containing special characters

**CORS Error**
- Check backend CORS configuration
- Ensure frontend and backend URLs are correctly configured

**Port Already in Use**
- Change the PORT in `.env` file
- Or kill the process using the port: `netstat -ano | findstr :5000` (Windows)

**Module Not Found**
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then reinstall

## How This App Can Scale

- Docker & Kubernetes: Containerize and deploy using Kubernetes
- Redis Caching: Add caching for frequently accessed data
- Load Balancers: Distribute traffic across multiple servers
- Database Optimization: Implement indexing and sharding
- Microservices: Split authentication, tasks, and user services
- CDN: Serve frontend assets through a Content Delivery Network
- Message Queues: Use RabbitMQ or Kafka for async operations

## Author

**Krishna Pamnani**
- GitHub: [@kpam2004](https://github.com/kpam2004)

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
