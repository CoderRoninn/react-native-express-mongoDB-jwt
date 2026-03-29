import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

// Get the User model to assign to request.user
const User = mongoose.model('User');

/**
 * requireAuth Middleware
 * Checks for a valid JWT in the Authorization header
 */
const requireAuth = (request, response, next) => {
    const { authorization } = request.headers;

    if (!authorization) {
        return response.status(401).send({ error: 'You must be logged in.' }); // Status 401 means unauthorized
    }
    // Take the token out of the authorization header
    const token = authorization.replace('Bearer ', '');

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if (err) {
            return response.status(401).send({ error: 'You must be logged in.' });
        }

        const { userId } = payload;
        //  Find the user by ID
        const user = await User.findById(userId);
        //  Attach the user to the request object
        request.user = user;
        //  Call the next middleware
        next();
    });
};

export default requireAuth;

