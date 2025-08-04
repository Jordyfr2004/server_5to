import { IsString, IsNumber } from 'class-validator';
export class CreateHorarioDto {
    @IsString()
    fecha: string;

    @IsString()
    horas_disponibles: string;

    @IsNumber()
    doctorId: number;
}

