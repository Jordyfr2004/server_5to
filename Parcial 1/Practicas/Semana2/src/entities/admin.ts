import {Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, BaseEntity} from 'typeorm';

@Entity()
export class Admin extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre : string

    @Column()
    apellido : string

    @Column()
    telefono : number

    @Column()
    correo : string

    @Column()
    password : string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date

}