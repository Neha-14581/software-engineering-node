import mongoose from "mongoose";
import likesSchema from "./LikesSchema";

const likesModel = mongoose.model("LikesModel", likesSchema);

export default likesModel;