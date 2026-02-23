# Task Management Tool - Backend

A robust Express.js backend API for a task management application with user authentication and CRUD operations for tasks.

## 🚀 Features

- **User Authentication**: Secure user registration and login with JWT tokens
- **Password Security**: Bcrypt encryption for user passwords
- **Task Management**: Create, read, update, and delete tasks
- **MongoDB Integration**: Persistent data storage with Mongoose ODM
- **CORS Support**: Cross-Origin Resource Sharing enabled for frontend communication
- **Environment Configuration**: Secure configuration management with environment variables
- **Input Validation**: Middleware-based validation for requests

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task-management-tool/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/task-management
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

4. **Start the server**

   **Development mode** (with auto-reload):
   ```bash
   npm run dev
   ```

   **Production mode**:
   ```bash
   npm start
   ```

   The server will start on `http://localhost:5000`

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^5.2.1 | Web framework |
| mongoose | ^9.0.1 | MongoDB ODM |
| jsonwebtoken | ^9.0.3 | JWT authentication |
| bcryptjs | ^3.0.3 | Password hashing |
| cors | ^2.8.5 | Cross-origin requests |
| dotenv | ^17.2.3 | Environment variables |
| nodemon | ^3.1.11 | Development auto-reload |

## 📁 Project Structure

```
backend/
├── config/
│   └── db.js                 # MongoDB connection setup
├── controllers/
│   ├── authController.js     # Authentication logic
│   └── taskController.js     # Task CRUD operations
├── middleware/
│   └── authMiddleware.js     # JWT verification
├── models/
│   ├── User.js              # User schema
│   └── Task.js              # Task schema
├── routes/
│   ├── authRoutes.js        # Auth endpoints
│   └── taskRoutes.js        # Task endpoints
├── server.js                # Express server entry point
├── .env                     # Environment variables (not in repo)
├── package.json             # Dependencies
└── README.md               # This file
```

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)

- **POST `/api/auth/register`** - Register a new user
  - Body: `{ email, password }`
  - Returns: User object and JWT token

- **POST `/api/auth/login`** - Login user
  - Body: `{ email, password }`
  - Returns: User object and JWT token

- **POST `/api/auth/logout`** - Logout user (optional)
  - Returns: Success message

### Task Routes (`/api/tasks`)

- **GET `/api/tasks`** - Get all tasks for authenticated user
  - Headers: `Authorization: Bearer <token>`
  - Returns: Array of tasks

- **POST `/api/tasks`** - Create a new task
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ title, description, status, priority }`
  - Returns: Created task object

- **PUT `/api/tasks/:id`** - Update a task
  - Headers: `Authorization: Bearer <token>`
  - Body: Task fields to update
  - Returns: Updated task object

- **DELETE `/api/tasks/:id`** - Delete a task
  - Headers: `Authorization: Bearer <token>`
  - Returns: Success message

## 🔐 Authentication

This backend uses **JWT (JSON Web Tokens)** for authentication:

1. User registers or logs in → Receives JWT token
2. Client stores token (typically in localStorage)
3. Client includes token in `Authorization: Bearer <token>` header for protected routes
4. Server verifies token via `authMiddleware` before processing request

## 🧪 Testing

Use tools like Postman or Thunder Client to test API endpoints:

1. **Register a user**: POST to `/api/auth/register`
2. **Login**: POST to `/api/auth/login` - save the token
3. **Create task**: POST to `/api/tasks` with Authorization header
4. **Fetch tasks**: GET `/api/tasks` with Authorization header

## 🐛 Troubleshooting

- **MongoDB Connection Error**: Verify MongoDB is running and `MONGODB_URI` is correct
- **JWT Errors**: Ensure `JWT_SECRET` is set in `.env`
- **CORS Errors**: Check frontend URL is configured in CORS settings
- **Port Already in Use**: Change PORT in `.env` or kill process using port 5000

## 📝 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/task-management |
| JWT_SECRET | Secret key for JWT signing | your-secret-key-here |
| NODE_ENV | Environment | development/production |

## 🚀 Deployment

### Using Heroku

1. Create a Heroku account and install Heroku CLI
2. Push to Heroku: `heroku create` and `git push heroku main`
3. Set environment variables: `heroku config:set JWT_SECRET=your_secret`

### Using other platforms (AWS, DigitalOcean, etc.)

Ensure to:
- Set all environment variables
- Configure MongoDB URI (use MongoDB Atlas for cloud)
- Update frontend API_URL to point to deployed backend

## 📄 License

This project is licensed under the ISC License.

## 👥 Support

For issues or questions, please create an issue in the repository.

---

**Happy coding!** 🎉
