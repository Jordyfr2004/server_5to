import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Candidato } from "../model/candidato";

@Entity()
export class Partido {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100, nullable: false })
  nombre!: string;

  @OneToMany(() => Candidato, (candidato) => candidato.partido)
  candidatos!: Candidato[];
}