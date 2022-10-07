import Tuit from "../models/Tuit";
import {Express, Request, Response} from "express";
import TuitControllerI from "../interfaces/TuitController";
import TuitDao from "../daos/TuitDao";

export default class TuitController implements TuitControllerI {
    app: Express;
    tuitDao: TuitDao;
    constructor(app: Express, tuitDao: TuitDao) {
        this.app = app;
        this.tuitDao = tuitDao;
        this.app.get('/tuits', this.findAllTuits);
        this.app.get('/tuits/:uid/tuits', this.findTuitsByUser);
        this.app.get('/tuits/:tid', this.findTuitById);
        this.app.post('/tuits/', this.createTuit);
        this.app.put('/tuits/:tid', this.updateTuit);
        this.app.delete('/tuits/:tid', this.deleteTuit);
    }
    findAllTuits = (req: Request, res: Response) =>
        this.tuitDao.findAllTuits()
            .then(tuits => res.json(tuits));
    findTuitsByUser = (req: Request, res: Response) =>
        this.tuitDao.findTuitsByUser(req.params.uid)
            .then((tuits: Tuit[]) => res.json(tuits));
    findTuitById = (req: Request, res: Response) =>
        this.tuitDao.findTuitById(req.params.tid)
            .then(tuit => res.json(tuit));
    createTuit = (req: Request, res: Response) =>
        this.tuitDao.createTuit(req.body)
            .then(tuit => res.json(tuit));
    updateTuit = (req: Request, res: Response) =>
        this.tuitDao.updateTuit(req.params.tid,req.body)
            .then(status => res.send(status));
    deleteTuit = (req: Request, res: Response) =>
        this.tuitDao.deleteTuit(req.params.tid)
            .then(status => res.json(status));

}

