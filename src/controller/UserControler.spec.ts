import { UserController } from "./UserController"
import { Request } from "express"
import { makeMockResponse } from "../mocks/mockResponse"

describe('first', () => { 
    const userController = new UserController()

    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()
    
    test('Should show users', () => { 
        userController.getUsers(mockRequest, mockResponse )
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toHaveLength(4)
    })

    test('Should create user', () => { 
        mockRequest.body ={
            name: "Tales"
        }
        userController.createUser(mockRequest, mockResponse )
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: "createUser" })
    })    

    test('Should show an error if no provider name of user', () => { 
        mockRequest.body ={
            name: ""
        }
        userController.createUser(mockRequest, mockResponse )
        expect(mockResponse.state.status).toBe(422)
        expect(mockResponse.state.json).toMatchObject({ message: "O nome não pode ser vazio" })
    })    
})