import express from 'express';
import { ROUTES } from '../constants/routes.js';

// Create a new router instance for grouping routes
const router = express.Router();

// Define a POST route for user signup
router.post(ROUTES.SIGNUP, (request, response) => {
    response.send('You made a post request');
});

export default router;
