import { Module } from '@nestjs/common';
import { MascotaService } from './mascota.service';
import { MascotaController } from './mascota.controller';
import { MascotaSchema } from './entities/mascota.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { MascotaResolver } from './mascota.resolver';

@Module({
  controllers: [MascotaController],
  providers: [MascotaService, MascotaResolver],
  imports: [
    MongooseModule.forFeature([
      { name: 'mascotas', schema: MascotaSchema }, // Registra el esquema de Mascota
    ]),
  ],
  exports: [MascotaService, MongooseModule],
})
export class MascotaModule {}
