import MessageI from "../../models/messages/MessageI";
import mongoose, {Schema} from "mongoose";

/**
 * @typedef Message represents the messages in the tuiter application
 * @property {string} message The message sent by the user
 * @property {Object} to The user who to whom the message is being sent
 * @property {Object} from The user who sent the message
 * @property {Date} sentOn The date on which the message was sent
 */
const MessageSchema = new mongoose.Schema<MessageI>(
    {
        message:  {type: "string"},
        to: {type: Schema.Types.ObjectId, ref: "UserModel"},
        from: {type: Schema.Types.ObjectId, ref: "UserModel"},
        sentOn: {type: "date"}
    }, {
        collection: "messages"
    }
);

export default MessageSchema;