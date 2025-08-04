import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Cita } from "../../citas/entities/cita.entity";
import { Doctor } from "../../doctor/entities/doctor.entity";

@Entity()
export class Horario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha: string;

    @Column()
    horas_disponibles: string;

    @Column()
    doctorId: number;

    @ManyToOne(() => Doctor, doctor => doctor.horarios)
    @JoinColumn({ name: 'doctorId' })
    doctor: Doctor;

    @OneToMany(() => Cita, cita => cita.horario)
    citas: Cita[];
}
