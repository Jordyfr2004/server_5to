import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Horario } from "../../horarios/entities/horario.entity";

@Entity()
export class Cita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  gmail: string;

  @Column()
  phone: string;

  @Column()
  sintomas: string;

  @Column({ nullable: true })
  horarioId: number;

  @ManyToOne(() => Horario, horario => horario.citas)
  @JoinColumn({ name: 'horarioId' })
  horario: Horario;
}
