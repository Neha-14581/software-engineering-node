/**
 * @file Controller RESTful Web service API for messages resource
 */
import MessageControllerI from "../interfaces/MessageController"
import MessageDao from "../daos/MessageDao";
import {Express, Request, Response} from "express";
import MessageI from "../models/messages/MessageI";
/**
 * @class MessageController Implements RESTful Web service API for messages
 * resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /api/users/:uid/messages/:anotherUid to send a message</li>
 *     <li>GET /api/users/:uid/messagesSent to retrieve all the messages sent by a user</li>
 *     <li>GET /api/users/:uid/messagesReceived to retrieve all the messages sent to the user</li>
 *     <li>DELETE /api/users/:uid/messages/:mid to remove a particular message instance</li>
 * </ul>
 * @property {MessageDao} messageDao Singleton DAO implementing message CRUD operations
 * @property {MessageController} messageController Singleton controller implementing
 * RESTful Web service API
 */
export default class MessageController implements MessageControllerI {
    private static messageDao: MessageDao = MessageDao.getInstance();
    private static messageController: MessageController | null = null;
    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return MessageController
     */
    public static getInstance = (app: Express): MessageController => {
        if (MessageController.messageController === null) {
            MessageController.messageController = new MessageController();
            app.post("/api/users/:uid/messages/:anotherUid", MessageController.messageController.userSendsMessage);
            app.get("/api/users/:uid/messagesSent", MessageController.messageController.findAllMessagesSentByUser);
            app.get("/api/users/:uid/messagesReceived", MessageController.messageController.findAllMessagesSentToUser);
            app.delete("/api/users/:uid/messages/:mid", MessageController.messageController.deleteMessageSentToUser);
        }
        return MessageController.messageController;
    }

    private constructor() {
    }

    /**
     * Retrieves a message sent to user and then deletes the message and returns a status.
     * @param req {Request} req Represents request from client
     * @param res {Response} res Represents response to the client
     */
    deleteMessageSentToUser = (req: Request, res:Response) =>
        MessageController.messageDao.deleteMessageSentToUser(req.params.uid, req.params.mid)
            .then(status => res.send(status));
    /**
     * Retrieves all messages sent by a user from the database and returns the messages
     * @param req {Request} Represents request from client
     * @param res {Response} Represents response to client, including the body formatted as JSON array containing the
     * message objects.
     *
     */
    findAllMessagesSentByUser= (req: Request, res:Response) =>
        MessageController.messageDao.findAllMessagesSentByUser(req.params.uid)
            .then((messages: MessageI[]) => res.json(messages));

    /**
     * Retrieves all messages sent to a user from the database and returns the messages
     * @param req {Request} Represents request from client
     * @param res {Response} Represents response to client, including the body formatted as JSON array containing the
     * message objects.
     *
     */
    findAllMessagesSentToUser = (req: Request, res:Response) =>
        MessageController.messageDao.findAllMessagesSentToUser(req.params.uid)
            .then((messages: MessageI[]) => res.json(messages));

    /**
     * @param {Request} req Represents request from client, including body
     * containing the JSON object for the new message to be inserted in the
     * database
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new message that was inserted in the
     * database
     */
    userSendsMessage = (req: Request, res:Response) =>
        MessageController.messageDao.userSendsAMessageToAnotherUser(req.params.uid, req.params.anotherUid, req.body)
            .then((message: MessageI) => res.json(message));

}