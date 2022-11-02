import User from "../users/User";
import Tuit from "../tuits/Tuit";
import BookmarkI from "./BookmarkI";

export default class Bookmark implements BookmarkI {
    private id: string = '';
    bookmarkedBy: User;
    tuit: Tuit;

    constructor(id: string, tuit: Tuit, bookmarkedBy: User) {
        this.id = id;
        this.bookmarkedBy = bookmarkedBy;
        this.tuit = tuit;
    }

}