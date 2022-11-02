/**
 * @file Implements DAO managing data storage of tuits. Uses mongoose TuitModel
 * to integrate with MongoDB
 */
import TuitModel from "../mongoose/tuits/TuitModel";
import Tuit from "../models/tuits/Tuit";
import TuitDaoI from "../interfaces/TuitDao";

/**
 * @class TuitDao Implements Data Access Object managing data storage
 * of Users
 * @property {TuitDao} tuitDao Private single instance of UserDao
 */
export default class TuitDao implements TuitDaoI {
    private static tuitDao: TuitDao | null = null;
    /**
     * Creates singleton DAO instance
     * @returns TuitDao
     */
    public static getInstance = (): TuitDao => {
        if(TuitDao.tuitDao === null) {
            TuitDao.tuitDao = new TuitDao();
        }
        return TuitDao.tuitDao;
    }
    private constructor() {}

    /**
     * Uses Tuit model to retrive all the tuits.
     * @returns a Promise to be notified with all the tuits in the database.
     */
    findAllTuits = async (): Promise<Tuit[]> =>
        TuitModel.find()
    /**
     * Uses Tuit model to retrieve all the tuits by the user.
     * @returns a Promise to be notified with all the tuits by the user.
     * @param uid the user if of the specific user
     */
    findAllTuitsByUser = async (uid: string): Promise<Tuit[]> =>
        TuitModel.find({postedBy: uid})

    /**
     * Uses Tuit model to retrieve a tuit by user id.
     * @param uid the user id
     * @returns Promise that notifies with the retreived tuit.
     */
    findTuitById = async (uid: string): Promise<any> =>
        TuitModel.findById(uid)
            .populate("postedBy")
            .exec();

    /**
     * Uses Tuit model to create a tuit.
     * @param uid the user id of the user
     * @param tuit the tuit that's created
     * @returns a Promise that notifies that the tuit has been created
     */
    createTuitByUser = async (uid: string, tuit: Tuit): Promise<Tuit> =>
        TuitModel.create({...tuit, postedBy: uid});

    /**
     * Uses Tuit model to update a tuit.
     * @param uid the user id of the user
     * @param tuit the tuit that needs to be updated
     */
    updateTuit = async (uid: string, tuit: Tuit): Promise<any> =>
        TuitModel.updateOne(
            {_id: uid},
            {$set: tuit});

    /**
     * Uses tuit model to delete a tuit.
     * @param uid the user id of the user
     */
    deleteTuit = async (uid: string): Promise<any> =>
        TuitModel.deleteOne({_id: uid});
}