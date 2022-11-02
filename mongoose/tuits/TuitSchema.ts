import mongoose, {Schema} from "mongoose";
import Tuit from "../../models/tuits/Tuit";

/**
 * @typedef Tuit represents the tuits in the tuiter application
 * @property {string} tuit The tuit text
 * @property {Object} postedBy The user who posted the tuit
 * @property {Date} postedOn The date on which the user posted the tuit
 */
const TuitSchema = new mongoose.Schema<Tuit>({
    tuit: {type: String, required: true},
    postedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    postedOn: {type: Date, default: Date.now},
}, {collection: "tuits"});
export default TuitSchema;