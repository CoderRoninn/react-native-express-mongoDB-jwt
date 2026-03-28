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
router.post(ROUTES.SIGNUP, (request, response) => {
    response.send('You made a post request');
});

export default router;
