import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
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

        // create a jwt token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        response.send({ token });

    } catch (error) {
        return response.status(422).send(error.message);
    }
});


export default router;
