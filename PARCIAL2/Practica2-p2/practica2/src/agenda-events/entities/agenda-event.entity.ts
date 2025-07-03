import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'agenda-events'})
export class AgendaEvent {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Field(() => String)
  titulo:string;

  @Column()
  @Field(() => String)
  descripcion: string;

  @Field(() => String)
  @Column()
  fecha:string;

  @Field(() => String)
  @Column()
  estado:string;

}
