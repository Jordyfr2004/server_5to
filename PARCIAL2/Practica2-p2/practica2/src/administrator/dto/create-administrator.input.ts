import { InputType,Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateAdministratorInput {

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  usuario: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  correo: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  password: string
}
