/**
 * @file Implements DAO managing data storage of messages. Uses mongoose MessageModel
 * to integrate with MongoDB
 */
import MessageDaoI from "../interfaces/MessageDao";
import MessageI from "../models/messages/MessageI";
import Message from "../models/messages/Message";
import MessageModel from "../mongoose/messages/MessageModel";

/**
 * @class MessageDao Implements Data Access Object managing data storage
 * of Messages
 * @property {MessageDao} messageDao Private single instance of MessageDao
 */
export default class MessageDao implements MessageDaoI {
    private static messageDao: MessageDao | null=null;
    /**
     * Creates singleton DAO instance
     * @returns TuitDao
     */
    public static getInstance = () : MessageDao => {
        if (MessageDao.messageDao == null) {
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao;
    }
    private constructor() {
    }

    /**
     * Uses Message Model to delete a message sent to the user
     * @param uid the user id of the user who sent the message.
     * @param mid the message of the message that has to be deleted.
     * @returns Promise to be notified with delete status
     */
    deleteMessageSentToUser = async (uid: string,mid: string): Promise<any> =>
        await MessageModel
            .deleteOne(
                {
                    _id: mid
                }
            )
            .then(messages => messages)
            .catch(error => error);

    /**
     * Uses Message Model to view all the messages sent by a user.
     * @param uid the user id of the user
     * @returns Promise to be notified with all the messages sent by the user
     */
    findAllMessagesSentByUser = async (uid: string): Promise<MessageI[]> =>
        await MessageModel
            .find({from: uid})
            .populate("message")
            .exec()
            .then(messages => messages)
            .catch(error => error);

    /**
     * Uses Message model to view all the messages sent to a user.
     * @param uid the user id of the user
     * @returns Promise to be notified with all the messages sent to the user
     */
    findAllMessagesSentToUser = async (uid: string): Promise<MessageI[]> =>
        await MessageModel
            .find({to: uid})
            .populate("message")
            .exec()
            .then(messages => messages)
            .catch(error => error);

    /**
     * Uses message model to send a message from one user to another.
     * @param uid the user id of the user
     * @param anotherUid the user id of the user who receives the message
     * @param message the message that needs to be sent
     * @returns Promise to be notified with the message that was sent
     */
    userSendsAMessageToAnotherUser = async (uid: string, anotherUid: string, message: Message): Promise<any> =>
        await MessageModel
            .create({
                ...message,
                from: uid,
                to: anotherUid
            })
            .then(messages => messages)
            .catch(error => error);

}