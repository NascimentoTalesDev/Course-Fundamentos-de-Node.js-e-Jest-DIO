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
})