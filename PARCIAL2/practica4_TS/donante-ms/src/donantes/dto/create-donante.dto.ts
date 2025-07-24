import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateDonanteDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @IsNotEmpty()
  @IsString()
  telefono: string;

  @IsNotEmpty()
  @IsString()
  direccion: string;
}
