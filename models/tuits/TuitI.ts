import User from "../users/User";
/**
 * @typedef Tuit represents the tuits in the tuiter application
 * @property {string} tuit The tuit text
 * @property {Object} postedBy The user who posted the tuit
 * @property {Date} postedOn The date on which the user posted the tuit
 */
export default interface TuitI {
    tuit: string,
    postedBy: User,
    postedOn?: Date,
    image?: String,
    youtube?: String,
    avatarLogo?: String,
    imageOverlay?: String,
};