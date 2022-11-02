import FollowI from "./FollowI";
import User from "../users/User";

export default class Follow implements FollowI {
    private id: string = '';
    userFollowed: User;
    userFollowing: User;
    constructor(id: string, userFollowed: User, userFollowing: User) {
        this.id = id;
        this.userFollowed = userFollowed;
        this.userFollowing = userFollowing;
    }
}