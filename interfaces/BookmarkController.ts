import {Request, Response} from "express";

/**
 * @file Declares controller that can talk to the bookmarks data access object model
 */
export default interface BookmarkControllerI {
    findAllUsersThatBookmarkedTuit(req: Request, res: Response): void;
    findAllTuitsBookmarkedByUser(req: Request, res: Response): void;
    userBookmarksTuit(req: Request, res: Response): void;
    userUnbookmarksTuit(req: Request, res: Response): void;
}