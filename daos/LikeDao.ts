/**
 * @file Implements DAO managing data storage of likes. Uses mongoose LikeModel
 * to integrate with MongoDB
 */
import LikeDaoI from "../interfaces/LikeDao";
import LikeModel from "../mongoose/LikeModel";
import Like from "../models/Like";

/**
 * @class MessageDao Implements Data Access Object managing data storage
 * of messages
 * @property {LikeDao} likeDao Private single instance of MessageDao
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
     * Uses LikeModel to retrieve all like document from likes collection
     * @param {string} tid Tuits primary key
     * @returns Promise To be notified when like is retrieved from the database
     */
    findAllUsersThatLikedTuit = async (tid: string): Promise<Like[]> =>
        LikeModel
            .find({tuit: tid})
            .populate("likedBy")
            .exec();

    /**
     * Uses LikeModel to retrieve all like document from likes collection
     * @param {string} uid Users primary key
     * @returns Promise To be notified when users like is retrieved from the database
     */
    findAllTuitsLikedByUser = async (uid: string): Promise<Like[]> =>
        LikeModel
            .find({likedBy: uid})
            .populate("tuit")
            .exec();

    /**
     * Inserts like instance into the database
     * @param {string} uid  Primary key of user
     * @param {string} tid  Primary key of tuit to be liked
     * @returns Promise To be notified when user likes is inserted into the database
     */
    userLikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.create({tuit: tid, likedBy: uid});

    /**
     * Removes likes from the database.
     * @param {string} uid  Primary key of user
     * @param {string} tid  Primary key of tuit to be unliked
     * @returns Promise To be notified when user likes is removed from the database
     */
    userUnlikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.deleteOne({tuit: tid, likedBy: uid});
}