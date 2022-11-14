/**
 * @file Declares Follow data type representing relationship between
 * Tuits, that is tuits posted by user
 */
import User from "./User";

/**
 * @typedef Tuit Represents tuits posted on the tuit website
 * @property {string} tuit the description or content of the tuit
 * @property {User} postedBy the user posting the tuit
 * @property {Date} postedOn the date on which the tuit was posted
 */
export default interface Tuit {
    tuit: string,
    postedBy: User,
    postedOn?: Date,
};