import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { loginDTO } from './dto/login.dto';
import { UsersDTO } from './dto/users.dto';
import { UsersService } from './users.service';

/**
 * UsersController -- Controllers are responsible for handling incoming requests and returning responses.
 * @author soundariya
 */
@ApiTags('Users')
@Controller('users')
export class UsersController {
    /**
     * @constructor Constructor for Inject Usersservice
     * @param userService  UsersService
     */
     constructor(private userService: UsersService) {}
    
     /**
      * Create user
      * @param user :UserDTO
      * @returns returns Created user 
      */
     @ApiCreatedResponse({description: 'User created successfully', status: HttpStatus.CREATED})
     @ApiInternalServerErrorResponse({description: 'User not created(Internal Server) ', status: HttpStatus.INTERNAL_SERVER_ERROR})
     @Post('/register')
     register(@Body() user: UsersDTO): Promise<string> {
         return this.userService.register(user);
     }
 
     /**
      * User Login
      * @param userLogin loginDTO
      * @returns token
      */
     @Post('/login')
     loginUser(@Body() userLogin:loginDTO): Promise<{token}> {
         return this.userService.loginUser(userLogin);
     }
 
     /**
      * Fetched record by userId
      * @param id userId
      * @returns UserDTO
      */
    @ApiOkResponse({description: 'User fetched successfully', status: HttpStatus.OK})
    @ApiNotFoundResponse({description: 'User Not found', status: HttpStatus.NOT_FOUND})
    // @Roles(Role.Guest)
    // @UseGuards(RolesGuard)
    @Get(':id')
    getUserById(@Param('id') id:number): Promise<UsersDTO>{
         return this.userService.getUserById(id);
     }
 
 
}
