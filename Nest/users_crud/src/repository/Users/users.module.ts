import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../../auth/auth.service';
// import { AuthModule } from './../auth/auth.module';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.services";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UsersController],
    providers: [UsersService, AuthService, JwtService],
    exports: [UsersService],
})

export class UsersModule {}