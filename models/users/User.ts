import AccountType from "../AccountType";
import MaritalStatus from "../MaritalStatus";
import Location from "../Location";
import UserI from "./UserI";
export default class User implements UserI {
    id: string;
    username: string = '';
    password: string = '';
    firstName: string | null = null;
    lastName: string | null = null;
    email: string = '';
    profilePhoto: string | null = null;
    headerImage: string | null = null;
    accountType: AccountType = AccountType.Personal;
    maritalStatus: MaritalStatus = MaritalStatus.Single;
    biography: string | null = null;
    dateOfBirth: Date | null = null;
    joined: Date = new Date();
    location: Location | null = null;
    constructor(id: string, username: string, password: string) {
        this.id = id; this.username = username; this.password = password;
    }
    get uName() { return this.username; }
    get pass() { return this.password; }
}