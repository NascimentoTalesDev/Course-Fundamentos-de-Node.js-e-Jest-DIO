import { Request, Response } from "express";
import { UserService } from "../service/UserService";

export class UserController {
    createUser = (req: Request, res: Response) => {
        const userService = new UserService()
        const { name } = req.body;
        
        userService.createUser(name)
        
        return res.json({ message: "createUser" })
    }

    getUsers = (req: Request, res: Response) =>{
        const userService = new UserService()
        const users = userService.getUsers()
        return res.json(users)
    }
}