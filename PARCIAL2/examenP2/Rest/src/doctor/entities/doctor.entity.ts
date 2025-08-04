import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Horario } from "../../horarios/entities/horario.entity";

@Entity()
export class Doctor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    specialty: string;

    @OneToMany(() => Horario, horario => horario.doctor)
    horarios: Horario[];
}
