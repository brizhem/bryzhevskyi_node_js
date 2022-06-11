import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginValidate {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}