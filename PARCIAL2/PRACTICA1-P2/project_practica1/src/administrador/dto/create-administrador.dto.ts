import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateAdministradorDto {
    @IsString()
    nombre:string;

    @IsString()
    usuario:string;

    @IsEmail()
    correo:string;

    @IsString()
    @MinLength(10)
    password:string;
}
