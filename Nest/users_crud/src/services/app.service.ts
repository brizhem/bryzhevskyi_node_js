import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloMy(): string {
    return 'Hello MY world';
  }

  login(): string {
    return 'Is Login';
  }

  createUser() {
    return 'create';
  }

  delete(): string {
    return 'Is Delete';
  }
}
