import { IsEmail, IsString, IsNumber, IsOptional } from 'class-validator';
export class CreateCitaDto {
    @IsString()
    name: string;

    @IsEmail()
    gmail: string;

    @IsString()
    phone: string;

    @IsString()
    sintomas: string;

    @IsOptional()
    @IsNumber()
    horarioId?: number; // Campo opcional
}
