import { IsString } from 'class-validator';

export class CreateReportTypeDto {
    @IsString()
    tipo: string;

    @IsString()
    reporte: string;

}
