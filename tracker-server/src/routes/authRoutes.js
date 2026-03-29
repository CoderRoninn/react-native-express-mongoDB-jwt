import express from 'express';
import mongoose from 'mongoose';
import { ROUTES } from '../constants/routes.js';

/**
 * Auth Routes
 * Handles user authentication related requests (signup, signin)
 */

// Get the User model
const User = mongoose.model('User');

// Create a new router instance for grouping routes
const router = express.Router();

// Define a POST route for user signup
router.post(ROUTES.SIGNUP, async (request, response) => {
    const { email, password } = request.body; // Pull email and password out of the request body

    try {
        const user = new User({ email, password }); // Create a new record of a User
        await user.save(); // Try to save the record to our database 

    } catch (error) {
        return response.status(422).send(error.message); // status code 422 means unprocessable entity (The user is already signed up)

    }
    response.send('You made a post request');
});

export default router;
