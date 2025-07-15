import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'administrators'})
export class Administrator {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    usuario: string;

    @Column()
    correo: string;

    @Column()
    password: string
}
