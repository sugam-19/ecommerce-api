import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UserSignUpDto {
    @IsNotEmpty({message: "Name can not be null."})
    @IsString({message: "Name should be string."})
    name: string;

    @IsNotEmpty({message: "Email can not be empty."})
    @IsEmail({}, {message: "Please provide a valid email."})
    email: string;

    @IsNotEmpty({message: "Password should not be empty."})
    @MinLength(8, {message: "Passowrd should be minimum 8 character long."})
    password: string;
}