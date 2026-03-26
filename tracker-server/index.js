const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./src/routes/authRoutes');

// Create an express application instance
const app = express();

app.use(authRoutes);

// MongoDB connection string with credentials
const mongoUri = 'mongodb+srv://admin:emir2121@cluster0.jjbixd4.mongodb.net/tracker';

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
