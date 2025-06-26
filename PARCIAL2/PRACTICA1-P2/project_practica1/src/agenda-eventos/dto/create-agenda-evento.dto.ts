import { IsDateString, IsString } from "class-validator";

export class CreateAgendaEventoDto {
    @IsString()
    titulo:string;

    @IsString()
    descripcion: string;

    @IsDateString()
    fecha: string;

    @IsString()
    estado:string;
}
