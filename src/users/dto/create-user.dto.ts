import { IsEmail, IsEnum, IsString } from "class-validator";

export class CreateUserDto{
  @IsString()
  name: string;
  
  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'Valid role required',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}