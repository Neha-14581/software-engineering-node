/**
 * @file Controller RESTful Web service API for follows resource
 */
import FollowControllerI from "../interfaces/FollowController";
import FollowDao from "../daos/FollowDao";
import {Express, Request, Response} from "express";

/**
 * @class FollowController Implements RESTful Web service API for follows
 * resource.
 * Defines the following HTTP endpoints:
 * @property {FollowDao} followDao Singleton DAO implementing message CRUD operations
 * @property {FollowController} followController Singleton controller implementing
 * RESTful Web service API
 */
export default class FollowController implements FollowControllerI {
    private static followDao: FollowDao = FollowDao.getInstance();
    private static followController: FollowController | null = null;
    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return FollowController
     */
    public static getInstance = (app: Express): FollowController => {
        if (FollowController.followController === null) {
            FollowController.followController = new FollowController();
            app.get("/api/users/:uid/followers", FollowController.followController.userViewsTheirFollowers);
            app.get("/api/users/:uid/following", FollowController.followController.userViewsTheirFollowing);
            app.post("/api/users/:uid/follow/:anotherUid", FollowController.followController.userFollowsAnotherUser);
            app.delete("/api/follow/:fid", FollowController.followController.userUnFollowsAnotherUser)
        }

        return FollowController.followController;
    }

    private constructor() {
    }

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid and anotherUid representing the user that sends wants is following the other
     * user and the user that is being followed
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new follows that was inserted in the
     * database
     */
    userFollowsAnotherUser = (req: Request, res: Response) =>
        FollowController.followDao.userFollowsAnotherUser(req.params.uid, req.params.anotherUid)
            .then(follows => res.json(follows));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid and anotherUid representing the user that sends wants is following the other
     * user and the user that is being followed
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new follows that was removed from the
     * database
     */
    userUnFollowsAnotherUser = (req: Request, res: Response) =>
        FollowController.followDao.userUnFollowsAnotherUser(req.params.fid)
            .then(follows => res.json(follows));

    /**
     * Retreives all followers of a user.
     * @param req Represents the request from the client, including path parameter user id
     * @param res Represents response to a client, including the body formatted as JSON containing the users,
     */
    userViewsTheirFollowers = (req: Request, res: Response) =>
        FollowController.followDao.userViewsTheirFollowers(req.params.uid)
            .then(follows => res.json(follows));

    /**
     * Retrieves all users this user if following.
     * @param req Represents the request from the client, including path parameter user id
     * @param res Represents the response to a client, including the body formatted as JSON.
     */
    userViewsTheirFollowing = (req: Request, res: Response) =>
        FollowController.followDao.userViewsTheirFollowing(req.params.uid)
            .then(follows => res.json(follows));
}