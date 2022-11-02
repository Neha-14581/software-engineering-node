import mongoose from "mongoose";
import MessageSchema from "./MessageSchema";

/**
 * @file Implements mongoose model to CRUD
 * documents in the messages collection
 */
const MessageModel = mongoose.model("MessageModel", MessageSchema);
export default MessageModel;