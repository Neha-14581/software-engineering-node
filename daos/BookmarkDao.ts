/**
 * @file Implements DAO managing data storage of bookmarks. Uses mongoose Bookmarks model
 * to integrate with MongoDB
 */
import BookmarkI from "../models/bookmarks/BookmarkI";
import BookmarkDaoI from "../interfaces/BookmarkDao";
import Bookmark from "../models/bookmarks/Bookmark";
import BookmarkModel from "../mongoose/bookmarks/BookmarkModel";
import LikeModel from "../mongoose/likes/LikeModel";

/**
 * @class BookmarkDao Implements Data Access Object managing data storage
 * of Bookmarks
 * @property {BookmarkDao} bookmarkDao Private single instance of BookmarkDao
 */
export default class BookmarkDao implements BookmarkDaoI {
    private static bookmarkDao: BookmarkDao | null = null;
    /**
     * Creates singleton DAO instance
     * @returns BookmarkDao
     */
    public static getInstance = () : BookmarkDao => {
        if (BookmarkDao.bookmarkDao === null) {
            BookmarkDao.bookmarkDao = new BookmarkDao();
        }
        return BookmarkDao.bookmarkDao;
    }
    private constructor() {
    }

    /**
     * Uses Bookmark model to find all the users who have bookmarked a tuit.
     * @param tid the tuit id of the tuit
     * @returns Promise to be notified with all the users that have bookmarked a tuit
     */
    findAllUsersThatBookmarkedTuit = async (tid: string): Promise<BookmarkI[]> =>
        await BookmarkModel
            .find({tuit: tid})
            .populate("bookmarkedBy")
            .exec();

    /**
     * Uses Bookmark model to find all the tuits bookmarked by a user.
     * @param uid the user id of the user
     * @returns Promise to be notified with all the tuits
     */
    findAllTuitsBookmarkedByUser = async (uid: string): Promise<BookmarkI[]> =>
        await BookmarkModel
            .find({bookmarkedBy: uid})
            .populate("tuit")
            .exec();

    /**
     * Uses Bookmark model to bookmark a tuit
     * @param uid the id of the user
     * @param tid the id of the tuit
     * @returns Promise to be notified with the bookmark
     */
    userBookmarksTuit = async (uid: string, tid: string): Promise<any> =>
        await BookmarkModel.create({tuit : tid, bookmarkedBy: uid});

    /**
     * Uses Bookmark model to un-bookmark a tuit
     * @param uid the id of the user
     * @param tid the id of the tuit
     */
    userUnBookmarksTuit = async (uid: string, tid: string): Promise<any> =>
        await LikeModel.deleteOne({tuit: tid, bookmarkedBy: uid});

}