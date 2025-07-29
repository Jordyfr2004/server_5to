import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Eleccion } from "../model/eleccion";

@Entity()
export class TipoEleccion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100, nullable: false })
  nombre!: string;

  @OneToMany(() => Eleccion, (eleccion) => eleccion.tipo)
  elecciones!: Eleccion[];
}