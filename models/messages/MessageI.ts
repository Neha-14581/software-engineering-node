/**
 * @file Declares Message data type representing relationship between
 * users and other users, as in user sends a message to another user
 */
import User from "../users/User";
import mongoose from "mongoose";

/**
 * @typedef MessageI Represents messaging relationship between a user and another user,
 * as in a user bookmarks a tuit
 */

export default interface MessageI {
    _id?: mongoose.Schema.Types.ObjectId,
    message: string,
    to : User,
    from : User,
    sentOn : Date
};