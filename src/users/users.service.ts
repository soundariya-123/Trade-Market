import { ConflictException, HttpException, HttpStatus, Injectable, InternalServerErrorException, Logger, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { loginDTO } from './dto/login.dto';
import { UsersDTO } from './dto/users.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcryptjs';
import { JwtPayload } from './jwt/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

/**
 *  UsersService -- to write a business logic
 *  @author soundariya
 */
@Injectable()
export class UsersService {

    /**
     * Logger instance
     */
    logger = new Logger(UsersService.name);

    /**
    * dependency injection
    * @param usersRepo UsersRepository
    */
    constructor(private usersRepo: UsersRepository,
        private jwtService: JwtService
    ) { }
 
    /**
     * Register user name and details into table
     * @param user UserDTO
     * @returns Created User
     * @throws InternalServerErrorException(errormessage)
     */
    async register(user: UsersDTO): Promise<string> {
        let response: UsersDTO;
        try {
            const { password } = user;
            const salt = await bcrypt.genSalt();
            const hasedPassword = await bcrypt.hash(password, salt);

            response = await this.usersRepo.save({ ...user, password: hasedPassword });
            if (response) {
                const message: string = `User registered successfully by this id:${response.id}`;
                this.logger.log(message);
                return message;
            } else {
                throw new InternalServerErrorException('Unable to register , please try again later');
            }
        } catch (err) {
            this.logger.error(err.message);
            if (err.errno === 1062) {
                throw new ConflictException(`User alredy exist`)
            }
            throw new InternalServerErrorException(err.message);
        }
    }

    /**
     * User login
     * @param userLogin loginDTO
     * @returns success message
     */
    async loginUser(userLogin: loginDTO): Promise<{ token }> {
        try {
            const userVal = await this.usersRepo.findOneOrFail({ email: userLogin.email });
            if (userVal && await bcrypt.compare(userLogin.password, userVal.password)) {
                const payload: JwtPayload = { email: userVal.email }
                let token = this.jwtService.sign(payload);

                return { token };
            } else {
                throw new UnauthorizedException('Invalid Credential')
            }
        } catch (err) {
            this.logger.error(err.message);
            if (err?.status === 401) {
                throw new UnauthorizedException('Invalid Credential')
            }
            throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    /**
     * Fetch all user
     * @param id userId
     * @returns UserDTO
     */
    async getUserById(id: number): Promise<UsersDTO> {
        try {
           let  response = await this.usersRepo.findOneOrFail(id);
            if(response){
                this.logger.log('Fetch user details')
                return response;
            } else {
                throw new NotFoundException('User Not found for this id')
            }
        } catch (err) {
            this.logger.error(err.message);
            throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
