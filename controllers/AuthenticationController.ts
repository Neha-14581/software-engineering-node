import UserDao from "../daos/UserDao";
import {Express, Request} from "express";
const bcrypt = require('bcrypt');
const saltRounds = 10;

const AuthenticationController = (app: Express) => {

    const userDao: UserDao = UserDao.getInstance();

    const signup = async (req : Request, res: Response) => {
        const newUser = req.body;
        const password = newUser.password;
        const hash = await bcrypt.hash(password, saltRounds);
        newUser.password = hash;

        const existingUser = await userDao
            .findUserByUsername(req.body.username);
        if (existingUser) {
            // @ts-ignore
            res.sendStatus(403);
            return;
        } else {
            const insertedUser = await userDao
                .createUser(newUser);
            insertedUser.password = '';
            // @ts-ignore
            req.session['profile'] = insertedUser;
            // @ts-ignore
            res.json(insertedUser);
        }
    }
    // @ts-ignore
    app.post("/api/auth/signup", signup);
}

export default AuthenticationController;