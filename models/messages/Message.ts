import MessageI from "./MessageI";
import User from "../users/User";

export default class Message implements MessageI {
    id: string = '';
    message : string;
    to: User;
    from: User;
    sentOn: Date;
    constructor(id: string, message: string,
                to: User, from: User, sentOn: Date) {
        this.id = id;
        this.message = message;
        this.to = to;
        this.from = from;
        this.sentOn = sentOn;
    }
}