import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class AgendaEvento {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    titulo:string;

    @Column()
    descripcion: string;

    @Column()
    fecha:Date;

    @Column()
    estado:string;

}
