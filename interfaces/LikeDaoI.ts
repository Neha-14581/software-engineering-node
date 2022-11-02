import LikeI from "../models/likes/LikeI";

/**
 * @file Declares API for Likes related data access object methods
 */
export default interface LikeDaoI {
    findAllUsersThatLikedTuit (tid: string): Promise<LikeI[]>;
    findAllTuitsLikedByUser (uid: string): Promise<LikeI[]>;
    userUnlikesTuit (tid: string, uid: string): Promise<any>;
    userLikesTuit (tid: string, uid: string): Promise<LikeI>;
};