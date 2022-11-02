
import {Request, Response} from "express";

/**
 * @file Declares controller that can talk to the follows data access object model
 */
export default interface FollowController {
    userFollowsAnotherUser(req: Request, res: Response): void;
    userUnFollowsAnotherUser(req: Request, res: Response): void;
    userViewsTheirFollowers(req: Request, res: Response): void;
    userViewsTheirFollowing(req: Request, res: Response): void;
}