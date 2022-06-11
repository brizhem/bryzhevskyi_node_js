import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { AuthService } from '../../auth/auth.service';
import { LocalAuthGuard } from '../../auth/local-auth.guards';
import { Controller, Get, Post, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.services';
import { CreateUserValidate } from "../../validators/createUserValidate";
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService,
        private authService: AuthService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':userName')
  findByName(@Param('userName') userName: string): Promise<User> {
    return this.userService.findByName(userName);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createUser(@Body() createUserValidate: CreateUserValidate) {
    return this.userService.createUser(createUserValidate);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':userEmail')
  delete(@Param('userEmail') userEmail: string): Promise<any> {
    return this.userService.remove(userEmail);
  }
}
