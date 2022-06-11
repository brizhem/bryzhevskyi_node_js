import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserValidate {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    role: string;

    name: string;
}