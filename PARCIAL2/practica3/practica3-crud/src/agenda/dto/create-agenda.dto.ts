import { IsString } from 'class-validator';
export class CreateAgendaDto {
    @IsString()
    titulo: string;

    @IsString()
    descripcion: string;

    @IsString()
    fecha: string;

    @IsString()
    estado: string;
}
