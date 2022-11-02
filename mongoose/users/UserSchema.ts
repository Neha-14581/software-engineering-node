import mongoose from "mongoose";
import User from "../../models/users/User";

/**
 * @typedef User represents the users in the tuiter application
 * @property {string} username The user's username
 * @property {string} password The user's password
 * @property {string} firstName The user's first name
 * @property {string}  lastName The user's last name
 * @property {string} email The user's email
 * @property {string} profilePhoto The user's profile photo
 * @property {string} headerImage The header image for the user
 * @property {string} dateOfBirth The user's DOB
 * @property {string} accountType An enum that defines the users account type
 * @property {string} maritalStatus An enum that defines the marital status of the user
 * @property {Object} location The location object that represents the user's location
 */
const UserSchema = new mongoose.Schema<User>({
    username: {type: String, required: true, default: `testusername${Date.now()}`},
    password: {type: String, required: true, default: `testpassword${Date.now()}`},
    firstName: String,
    lastName: String,
    email: {type: String, required: true, default: `testemail${Date.now()}`},
    profilePhoto: String,
    headerImage: String,
    biography: String,
    dateOfBirth: Date,
    accountType: {type: String, enum: ["PERSONAL", "ACADEMIC", "PROFESSIONAL"]},
    maritalStatus: {type: String, enum: ["MARRIED", "SINGLE", "WIDOWED"]},
    location: {
        latitude: Number,
        longitude: Number
    }
}, {collection: "users"});

export default UserSchema;