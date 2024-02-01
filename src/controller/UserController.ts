import { Request, Response } from "express";
import { UserService } from "../service/UserService";
import { database } from "../database";

export class UserController {
    createUser = (req: Request, res: Response) => {
        const userService = new UserService()
        const { name } = req.body;
        
        if(!name.length) return res.status(422).json({ message: "O nome não pode ser vazio" })
        
        userService.createUser(name)
        
        return res.status(201).json({ message: "createUser" })
    }

    getUsers = (req: Request, res: Response) =>{
        const userService = new UserService()
        const users = userService.getUsers()
        return res.status(200).json(users)
    }
}