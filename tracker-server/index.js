import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './src/routes/authRoutes.js';

// Create an express application instance
const app = express();
// 
// This activates the imported routes
app.use(authRoutes);


// Get MongoDB connection string from environment variable
const mongoUri = process.env.EXPO_PUBLIC_MONGO_URI;

// Connect to the MongoDB database
mongoose.connect(mongoUri);

// Check if the database connection was successful
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

// Log an error if the connection fails
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err);
});

// Main route that returns a simple message
app.get('/', (request, response) => {
  response.send('Hi there!');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
