import mongoose from "mongoose";
import FollowSchema from "./FollowSchema";

/**
 * @file Implements mongoose model to CRUD
 * documents in the follows collection
 */
const FollowModel = mongoose.model("FollowModel",FollowSchema);
export default FollowModel;