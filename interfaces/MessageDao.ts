import MessageI from "../models/messages/MessageI";
import Message from "../models/messages/Message";

/**
 * @file Declares API for Messages related data access object methods
 */
export default interface MessageDaoI {
    findAllMessagesSentByUser(uid: string): Promise<MessageI[]>;
    findAllMessagesSentToUser(uid: string): Promise<MessageI[]>;
    deleteMessageSentToUser(uid: string, mid: string): Promise<any>;
    userSendsAMessageToAnotherUser(uid: string, anotherUid: string, message: Message): Promise<any>;
}