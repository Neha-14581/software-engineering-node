/**
 * @file Implements DAO managing data storage of follows. Uses mongoose FollowModel
 * to integrate with MongoDB
 */
import FollowDaoI from "../interfaces/FollowDao";
import TuitDao from "./TuitDao";
import FollowModel from "../mongoose/follows/FollowModel";
import FollowI from "../models/follows/FollowI";
/**
 * @class FollowDao Implements Data Access Object managing data storage
 * of Follows
 * @property {FollowDao} followDao Private single instance of FollowDao
 */
export default class FollowDao implements FollowDaoI {
    private static followDao: FollowDao | null = null;
    /**
     * Creates singleton DAO instance
     * @returns FollowDao
     */
    public static getInstance = (): FollowDao => {
        if (FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }
    private constructor() {
    }

    /**
     * Uses Follow model to create a follow relationship between two users.
     * @param uid the id of the user
     * @param anotherUid the id of the user who is being followed
     * @returns Promise to be notified when the relationship is created.
     */
    userFollowsAnotherUser = async (uid: string, anotherUid: string): Promise<any> =>
        FollowModel.create({
            userFollowed:  anotherUid,
            userFollowing: uid
        })
            .then(follows => follows)
            .catch(error => error);

    /**
     * Uses Follow model to delete a follow relationship between two users.
     * @returns Promise to be notified when the relationship is deleted.
     * @param fid the unique id of the follow instance that needs to be deleted
     */
    userUnFollowsAnotherUser = async (fid: string): Promise<any> =>
        FollowModel.deleteOne({
            _id:  fid
        })
            .then(follows => follows)
            .catch(error => error);

    /**
     * Uses Follow model to view a user's followers.
     * @param uid the id of the user.
     */
    userViewsTheirFollowers = async (uid: string): Promise<FollowI[]> =>
        FollowModel.find({userFollowed: uid})
            .populate("userFollowing")
            .exec()
            .then(follows => follows)
            .catch(error => error);

    /**
     * Uses Follow model to view a list of other users that this user is following
     * @param uid the id of the user.
     */
    userViewsTheirFollowing = async (uid: string): Promise<FollowI[]> =>
        FollowModel.find({userFollowing: uid})
            .populate("userFollowed")
            .exec()
            .then(follows => follows)
            .catch(error => error);

}