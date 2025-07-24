import { IsString, IsEmail } from "class-validator";

export class CreateAdministradorDto {
    @IsString()
    public nombre: string;

    @IsString()
    public usuario: string;

    @IsEmail()
    public correo: string;

    @IsString()
    public password: string
}
