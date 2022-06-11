import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserRoles {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    createUser: boolean;

    @Column()
    removeUser: boolean;
}