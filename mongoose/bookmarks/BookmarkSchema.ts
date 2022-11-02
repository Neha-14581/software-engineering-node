import mongoose, {Schema} from "mongoose";
import BookmarkI from "../../models/bookmarks/BookmarkI";

/**
 * @typedef Bookmark represents the bookmarks in the tuiter application
 * @property {Object} tuit The tuit that was bookmarked
 * @property {Object} bookmarkedBy The user who bookmarked the tuit
 */
const BookmarkSchema = new mongoose.Schema<BookmarkI>({
    tuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    bookmarkedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "bookmarks"});
export default BookmarkSchema;