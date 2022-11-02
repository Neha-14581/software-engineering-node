import User from "../users/User";

/**
 * @typedef FollowI Represents follows relationship between a user and another user,
 * @property {User} userFollowed User being followed
 * @property {User} userFollowing User who is following
 */
export default interface FollowI {
    userFollowed: User,
    userFollowing: User
};