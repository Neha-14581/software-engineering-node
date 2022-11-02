import User from "../users/User";
import TuitI from "./TuitI";

export default class Tuit implements TuitI{
    private id: string = '';
    tuit: string = '';
    postedOn: Date = new Date();
    postedBy: User;
    constructor(id: string, tuit: string, postedOn: Date, postedBy: User) {
        this.id = id;
        this.tuit = tuit;
        this.postedBy = postedBy;
        this.postedOn = postedOn;
    }
}