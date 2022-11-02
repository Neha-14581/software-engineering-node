import mongoose, {Schema} from "mongoose";
import FollowI from "../../models/follows/FollowI";

/**
 * @typedef Follow represents the follows in the tuiter application
 * @property {Object} userFollowed The user who is followed.
 * @property {Object} userFollowing The user who is following another user.
 */
const FollowSchema = new mongoose.Schema<FollowI>(
    {
        userFollowed: {type: Schema.Types.ObjectId, ref: "UserModel"},
        userFollowing: {type: Schema.Types.ObjectId, ref: "UserModel"}
    },
    {
        collection: "follows"
    }
);
export default FollowSchema;