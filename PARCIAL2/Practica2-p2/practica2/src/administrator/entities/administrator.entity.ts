import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity({name:'administrators'})
export class Administrator {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  @Field(() => String)
  nombre: string;

  @Column()
  @Field(()=> String)
  usuario : string;

  @Column()
  @Field(() =>String)
  correo: string;

  @Column()
  @Field(()=> String)
  password: string;

  @CreateDateColumn()
  @Field(()=>Date)
  createAt: Date;

  @UpdateDateColumn()
  @Field(()=>Date)
  updateAt: Date;

}
