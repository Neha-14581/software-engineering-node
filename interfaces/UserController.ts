import {Request, Response} from "express";

/**
 * @file Declares controller that can talk to the users data access object model
 */
export default interface UserControllerI {
   findAllUsers(req: Request, res: Response): void;
   findUserById(req: Request, res: Response): void;
   createUser(req: Request, res: Response): void;
   deleteUser(req: Request, res: Response): void;
   updateUser(req: Request, res: Response): void;
}
