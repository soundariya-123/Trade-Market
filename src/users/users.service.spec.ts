import { HttpException } from "@nestjs/common";
import { Strategy as JWTStrategy, ExtractJwt, VerifyCallback, StrategyOptions } from 'passport-jwt';
import { Test, TestingModule } from "@nestjs/testing";
import { plainToInstance } from "class-transformer";
import { UsersDTO } from "./dto/users.dto";
import { JwtStratagy } from "./jwt/jwt.strategy";
import { UsersRepository } from "./users.repository";
import { UsersService } from "./users.service"
import { JwtModule, JwtService } from "@nestjs/jwt";



const users = [{
        id: 1,
        name: "soundariya",
        email: "soundariya1@hcl.com",
        phone: "6352415896",
        password: "123",
        roles: "guest",
        gender: "female",
        age: 21
}]
const ofImportDto = plainToInstance(UsersDTO, users)
describe('UserService', () => {
    let userService : UsersService; 
    let userRepo ;
    beforeEach(async () => {
        let module: TestingModule = await Test.createTestingModule({
           
            providers: [{
                provide: JwtService,
                useFactory: () => {
                    sign: jest.fn()
                }

            },          
                UsersService,   {
                provide: UsersRepository,  
                useFactory: () => ({
                    find:jest.fn(),
                    findOneOrFail:jest.fn(),
                }),
            }]
        }).compile();

                
        userService = module.get<UsersService>(UsersService);
        userRepo = module.get<UsersRepository>(UsersRepository)
    })
    it("should be defined", ()=> {
        expect(userService).toBeDefined()
    })

    //getById
    describe("When allUsers()", () => {
        describe('AND Success', () => {
            it('should return response', async () => {
                let findOneSpy = jest.spyOn(userRepo, 'findOneOrFail').mockResolvedValue(ofImportDto[0]);
                let response = await userService.getUserById(1);
                expect(response).toEqual(ofImportDto[0]);
                expect(findOneSpy).toHaveBeenCalled()
              
            })

        })

        describe('AND failed', () => {
            it('should return error', async () => {
                const findOneSpy = jest.spyOn(userRepo, 'findOneOrFail').mockRejectedValue(new Error('User Not found for this id'));  
                await expect(userService.getUserById(1)).rejects.toThrow(HttpException);
                expect(findOneSpy).toHaveBeenCalledTimes(1)

            })

        })
    })
})