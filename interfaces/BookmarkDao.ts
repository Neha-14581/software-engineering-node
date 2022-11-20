import BookMark from "../models/BookMark";

/**
 * @file Declares API for BookMark related data access object methods
 */

//bug fixed

export default interface BookMarkI {
    findAllUsersThatBookMarkedTuit (tid: string): Promise<BookMark[]>;
    findAllTuitsBookmarkedByUser (uid: string): Promise<BookMark[]>;
    userUnBookMarksTuit (tid: string, uid: string): Promise<any>;
    userBookmarkedTuit (tid: string, uid: string): Promise<BookMark>;
};