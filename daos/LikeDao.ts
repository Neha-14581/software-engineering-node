/**
 * @file Implements DAO managing data storage of likes. Uses mongoose LikeModel
 * to integrate with MongoDB
 */
import LikeDaoI from "../interfaces/LikeDaoI";
import LikeModel from "../mongoose/likes/LikeModel";
import LikeI from "../models/likes/LikeI";

/**
 * @class LikeDao Implements Data Access Object managing data storage
 * of Likes
 * @property {LikeDao} likeDao Private single instance of LikeDao
 */
export default class LikeDao implements LikeDaoI {
    private static likeDao: LikeDao | null = null;
    /**
     * Creates singleton DAO instance
     * @returns LikeDao
     */
    public static getInstance = (): LikeDao => {
        if(LikeDao.likeDao === null) {
            LikeDao.likeDao = new LikeDao();
        }
        return LikeDao.likeDao;
    }
    private constructor() {}

    /**
     * Uses Likes model to find all the users that have liked a tuit
     * @param tid the id of the tuit
     * @returns Promise to be notified with all the users that have liked a tuit.
     */
    findAllUsersThatLikedTuit = async (tid: string): Promise<LikeI[]> =>
        LikeModel
            .find({tuit: tid})
            .populate("likedBy")
            .exec();

    /**
     * Uses Like model to find all the tuits that are liked by a user.
     * @param uid the user id of the user
     * @returns Promise to be notified with all the tuits liked by the user
     */
    findAllTuitsLikedByUser = async (uid: string): Promise<LikeI[]> =>
        LikeModel
            .find({likedBy: uid})
            .populate("tuit")
            .exec();

    /**
     * Uses Like model to like a tuit.
     * @param uid the id of the user who likes the tuit
     * @param tid the id of the tuit that was liked by the user.
     * @returns Promise to be notified with the liked tuit
     */
    userLikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.create({tuit: tid, likedBy: uid});

    /**
     * Uses Like model to unlike a tuit.
     * @param uid the id of the user who unlikes the tuit
     * @param tid the id of the tuit that was unliked by the user
     * @returns Promise to be notified with the unliked tuit.
     */
    userUnlikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.deleteOne({tuit: tid, likedBy: uid});
}