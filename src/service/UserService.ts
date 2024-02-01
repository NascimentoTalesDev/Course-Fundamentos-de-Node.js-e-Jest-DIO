import {database} from "../database"

export class UserService {
    createUser = (name: string) => {
        database.push(name)
        console.log("database", database);
    }

    getUsers = () => {
        return database;
    }
}