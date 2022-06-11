import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findByName(name: string): Promise<User> {
    return this.usersRepository.findOneBy({name});
  }

  findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOneBy({email});
  }

  async createUser(createUserDto): Promise<void | Error> {
    const currentUser = await this.findByEmail(createUserDto.email);
    if (currentUser) return new Error("user alredy exict");

    createUserDto.password = await this.hashPassword(createUserDto.password);

    await this.usersRepository.save(createUserDto);
    return createUserDto;
  }

  async remove(email: string): Promise<any> {
    const deletedUser = await this.usersRepository.delete(email);
    return deletedUser;
  }

  async hashPassword(password: string) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);

    return hash;
  }
}