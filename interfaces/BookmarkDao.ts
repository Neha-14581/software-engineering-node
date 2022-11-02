/**
 * @file Declares API for Bookmarks related data accesss object methods
 */
import BookmarkI from "../models/bookmarks/BookmarkI";

export default interface BookmarkDao {
    findAllUsersThatBookmarkedTuit(tid: string): Promise<BookmarkI[]>;
    findAllTuitsBookmarkedByUser(uid: string): Promise<BookmarkI[]>;
    userBookmarksTuit(uid: string, tid: string): Promise<any>;
    userUnBookmarksTuit(uid: string, tid: string): Promise<BookmarkI>;
}