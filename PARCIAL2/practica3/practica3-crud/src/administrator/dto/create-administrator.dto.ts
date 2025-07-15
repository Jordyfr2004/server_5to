import { IsString, IsEmail, MinLength } from 'class-validator';
export class CreateAdministratorDto {
    @IsString()
    nombre: string;

    @IsString()
    usuario: string;

    @IsEmail()
    correo: string;

    @IsString()
    @MinLength(8)
    password: string
}
