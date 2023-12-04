import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMascotaDto {


  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id_cliente: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id_tipo_mascota: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id_habito: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  nombre_mascota: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  fecha_nacimiento: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  genero: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  color: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  esterilizado: string;

  @Field(() => Boolean)
  @IsNotEmpty()
  active: boolean;

}
