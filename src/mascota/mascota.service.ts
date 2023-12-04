import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { Model } from 'mongoose'; // Importa Model desde mongoose
import { InjectModel } from '@nestjs/mongoose';
import { Mascota } from './entities/mascota.entity';

@Injectable()
export class MascotaService {
  private readonly logger = new Logger('MascotaService');

  constructor(
    @InjectModel('mascotas')
    private readonly mascotaModel: Model<Mascota>,
  ) {}

  async create(createMascotaDto: CreateMascotaDto) {
    try {
      const mascota = new this.mascotaModel(createMascotaDto);
      await mascota.save();
      return mascota;
    } catch (error) {
      console.log(error);
      if (error.code === 11000)
        throw new BadRequestException('Registro duplicado');
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado');
    }
  }

  async findAll() {
    return this.mascotaModel.find({}).exec();
  }

  async findOne(id: string) {
    const mascota = await this.mascotaModel.findById(id).exec();
    if (!mascota) {
      throw new NotFoundException(`Mascota ${id} no encontrado`);
    }
    return mascota;
  }

  async update(id: string, updateMascotaDto: UpdateMascotaDto) {
    const mascota = await this.mascotaModel
      .findByIdAndUpdate(id, updateMascotaDto, { new: true })
      .exec();
    if (!mascota) {
      throw new NotFoundException(`Mascota ${id} no encontrado`);
    }
    return mascota;
  }

  async remove(id: string) {
    const mascota = await this.findOne(id);
    await mascota.updateOne({ id });
    return mascota;
  }

  async updateAllActive() {
    await this.mascotaModel.updateMany({ active: true });
  }

  prueba(): string[] {
    return ['uno', 'dos', 'tres'];
  }
}
