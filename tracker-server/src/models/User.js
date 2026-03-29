import mongoose from 'mongoose';

/**
 * User Model
 * Defines the schema and structure for user data in the database
 */

// Create a user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true, // Must be a unique email address
        required: true // This field is mandatory
    },
    password: {
        type: String,
        required: true // This field is mandatory
    }
});

mongoose.model('User', userSchema);
