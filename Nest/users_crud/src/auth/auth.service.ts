import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UsersService } from 'src/repository/Users/users.services';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { };
    
    async validateUser(userEmail: string, pass: string): Promise<any> {
      const user = await this.usersService.findByEmail(userEmail);
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
      const payload = { username: user.name, sub: user.email };
    return {
        access_token: this.jwtService.sign(payload, { secret: jwtConstants.secret }),
    };
  }
}
