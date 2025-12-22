const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// Initialize environment variables from .env file
dotenv.config();

// Establish MongoDB connection
connectDB();

const app = express();

// Middleware: Enable Cross-Origin Resource Sharing
app.use(cors());

// Middleware: Parse incoming JSON request bodies
app.use(express.json());

// Routes: Authentication endpoints (login, register, logout)
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start Express server on configured PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const taskRoutes = require('./routes/taskRoutes');

app.use('/api/tasks', taskRoutes);

