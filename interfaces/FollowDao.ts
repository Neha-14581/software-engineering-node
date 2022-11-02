import FollowI from "../models/follows/FollowI";

/**
 * @file Declares API for Follows related data access object methods
 */

export default interface FollowDaoI {
    userFollowsAnotherUser(uid: string, AnotherUid: string): Promise<any>;
    userUnFollowsAnotherUser(uid: string, AnotherUid: string): Promise<any>;
    userViewsTheirFollowers(uid: string): Promise<FollowI[]>;
    userViewsTheirFollowing(uid: string): Promise<FollowI[]>;
}