import { IsString, IsNotEmpty, IsDateString, IsNumber } from 'class-validator';

export class CreateSolicitudDto {
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsDateString()
  fecha: Date;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsNumber()
  receptorId: number;
}
