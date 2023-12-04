import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class Mascota {
 

  @Field()
  @Prop({ required: true })
  id_cliente: string;

  @Field()
  @Prop({ required: true })
  id_tipo_mascota: string;

  @Field()
  @Prop({ required: true })
  id_habito: string;

  @Field()
  @Prop({ required: true })
  nombre_mascota: string;

  @Field()
  @Prop({ required: true })
  fecha_nacimiento: string;

  @Field()
  @Prop({ required: true })
  genero: string;

  @Field()
  @Prop({ required: true })
  color: string;
  
  @Field()
  @Prop({ required: false})
  esterilizado: string;


  @Field()
  @Prop({ required: true })
  active: boolean;
  default = true;
}

export const MascotaSchema = SchemaFactory.createForClass(Mascota);

export type MascotaDocument = Mascota & Document;
export const MascotaModel = mongoose.model<MascotaDocument>(
  'mascotas',
  MascotaSchema,
);

