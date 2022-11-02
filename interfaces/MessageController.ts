import {Request, Response} from "express";

/**
 * @file Declares controller that can talk to the messages data access object model
 */
export default interface MessageController {
    userSendsMessage(req: Request, res: Response): void;
    deleteMessageSentToUser(req: Request, res: Response): void;
    findAllMessagesSentByUser(req: Request, res: Response): void;
    findAllMessagesSentToUser(req: Request, res: Response): void;
}