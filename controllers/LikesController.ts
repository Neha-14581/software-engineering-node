import {Express, Request, Response}
    from "express";
import * as dao from "../daos/LikesDao";

const findTuitsUserLiked =
    (req: Request, res: Response) => dao
        .findTuitsUserLiked(req.params.uid)
        .then(likes => res.json(likes));

const findUsersThatLikedTuit =
    (req: Request, res: Response) => dao
        .findUsersThatLikedTuit(req.params.tid)
        .then(likes => res.json(likes));

const findTuitLikesCount =
    (req: Request, res: Response) =>
        dao.findTuitLikesCount(req.params.tid)
            .then(count => res.json({count}));

const userLikesTuit = (req: Request, res: Response) =>
    dao.userLikesTuit(req.params.uid, req.params.tid)
        .then(status => res.json(status));

const userUnlikesTuit = (req: Request, res: Response) =>
    dao.userUnlikesTuit(req.params.uid, req.params.tid)
        .then(status => res.json(status));

export default (app: Express) => {
    app.get("/api/users/:uid/likes",
        findTuitsUserLiked)
    app.get("/api/tuits/:tid/likes",
        findUsersThatLikedTuit)
    app.get("/api/tuits/:tid/likes/count",
        findTuitLikesCount)
    app.post("/api/users/:uid/likes/:tid",
        userLikesTuit)
    app.delete("/api/users/:uid/likes/:tid",
        userUnlikesTuit)
};
