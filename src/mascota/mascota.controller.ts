import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { MascotaService } from './mascota.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';

@Controller('mascota')
export class MascotaController {
  constructor(private readonly mascotaService: MascotaService) {}

  @Post()
  create(@Body() createEstudianteDto: CreateMascotaDto) {
    return this.mascotaService.create(createEstudianteDto);
  }

  @Get()
  findAll() {
    return this.mascotaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.mascotaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEstudianteDto: UpdateMascotaDto,
  ) {
    return this.mascotaService.update(id, updateEstudianteDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.mascotaService.remove(id);
  }
}
