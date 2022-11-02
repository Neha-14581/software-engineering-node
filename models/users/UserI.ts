import AccountType from "../AccountType";
import MaritalStatus from "../MaritalStatus";
import Location from "../Location";
import mongoose from "mongoose";

/**
 * @typedef UserI Represents a user in the tuiter application
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

export default interface UserI {
    _id?: mongoose.Schema.Types.ObjectId,
    username: string,
    password: string,
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePhoto?: string | null,
    headerImage?: string | null,
    biography?: string | null,
    dateOfBirth?: Date | null,
    accountType?: AccountType,
    maritalStatus?: MaritalStatus,
    location?: Location | null,
};