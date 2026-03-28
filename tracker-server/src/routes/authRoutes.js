import express from 'express';

// Create a new router instance for grouping routes
const router = express.Router();

// Define a POST route for user signup
router.post('/signup', (request, response) => {
    response.send('You made a post request');
});

export default router;
