import { IsString, IsOptional, IsDateString, IsNumber } from 'class-validator';

export class UpdateSolicitudDto {
  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsDateString()
  @IsOptional()
  fecha?: Date;

  @IsString()
  @IsOptional()
  estado?: string;

  @IsNumber()
  @IsOptional()
  receptorId?: number;
}
