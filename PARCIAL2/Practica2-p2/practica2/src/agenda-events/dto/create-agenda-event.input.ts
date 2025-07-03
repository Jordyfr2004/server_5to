import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateAgendaEventInput {

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
   titulo:string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  fecha:string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  estado:string;
}
