import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateSolicitudDto {
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
