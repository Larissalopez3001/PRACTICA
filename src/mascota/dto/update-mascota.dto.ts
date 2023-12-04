import { PartialType } from '@nestjs/mapped-types';
import { CreateMascotaDto } from './create-mascota.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateMascotaDto extends PartialType(CreateMascotaDto) {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fecha_nacimiento?: string;
}
