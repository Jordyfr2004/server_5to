import { IsString } from "class-validator";
export class CreateTipoReporteDto {
    @IsString()
    tipo:string;

    @IsString()
    reporte:string;
}
