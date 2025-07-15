import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'reportType'})
export class ReportType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipo: string;

    @Column()
    reporte: string;
}
