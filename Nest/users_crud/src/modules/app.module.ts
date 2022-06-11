import { UserRoles } from './../repository/UserRoles/userRoles.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './../auth/auth.module';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { User } from "../repository/Users/user.entity";
import { UsersModule } from "../repository/Users/users.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'sa',
      password: 'Password32',
      database: 'invsoft',
      entities: [User, UserRoles],
      synchronize: true
    }),
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
