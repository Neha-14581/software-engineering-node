import User from "../users/User";
import TuitI from "../tuits/TuitI";
import LikeI from "./LikeI";
import Tuit from "../tuits/Tuit";

export default class Like implements LikeI {
    private id: string = '';
    likedBy: User;
    tuit: Tuit;
    constructor(id: string, tuit: Tuit, likedBy: User) {
        this.id = id;
        this.likedBy = likedBy;
        this.tuit = tuit;
    }
}