import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity()
export class Administrador {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre: string;

    @Column()
    usuario: string;

    @Column()
    correo: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}
