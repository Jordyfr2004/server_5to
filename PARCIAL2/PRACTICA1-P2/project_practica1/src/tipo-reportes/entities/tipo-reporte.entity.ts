import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity()
export class TipoReporte {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    tipo:string;

    @Column()
    reporte:string;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updateAt: Date;

}
