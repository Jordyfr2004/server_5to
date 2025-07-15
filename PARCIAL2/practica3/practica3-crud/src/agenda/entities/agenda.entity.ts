import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'agenda'})
export class Agenda {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column()
    fecha: string

    @Column()
    estado:string;
    
}
