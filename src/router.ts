import { Router } from "express"
import { UserController } from "./controller/UserController"

export const router = Router()

const userController = new UserController()

router.post("/user", userController.createUser)

router.get("/users", userController.getUsers)