import { Entity, Column, PrimaryGeneratedColumn, OneToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { UserRoles } from "../UserRoles/userRoles.entity";

@Entity()
export class User {    
    @PrimaryColumn()
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @OneToOne(() => UserRoles)
    @JoinColumn()
    rolId: UserRoles;
}