import Tuit from "./Tuit";
import User from "./User";

export default interface Dislike {
    tuit: Tuit,
    dislikedBy: User
};
//middletier