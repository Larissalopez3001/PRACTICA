import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Mascota as Mascota, MascotaModel } from './entities/mascota.entity';
import { MascotaService as MascotaService } from './mascota.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';

@Resolver(() => Mascota)
export class MascotaResolver {
  constructor(private readonly mascotaService: MascotaService) {}

  @Query(() => [Mascota], { name: 'mascots' })
  async getMascotas(): Promise<Mascota[]> {
    return this.mascotaService.findAll();
  }

  @Query(() => Mascota, { name: 'mascota' })
  async getMascota(@Args('id', { type: () => ID }) id: string): Promise<Mascota> {
    return this.mascotaService.findOne(id);
  }

  @Mutation(() => Mascota)
  async createMascota(
    @Args('createMascotaDto') createMascotaDto: CreateMascotaDto,
  ): Promise<Mascota> {
    return this.mascotaService.create(createMascotaDto);
  }

  @Mutation(() => Mascota)
  async updateMascota(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateMascotaDto') updateMascotaDto: UpdateMascotaDto,
  ): Promise<Mascota> {
    return this.mascotaService.update(id, updateMascotaDto);
  }

  @Mutation(() => Mascota)
  async removeMascota(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Mascota> {
    return this.mascotaService.remove(id);
  }

  @Mutation(() => Mascota)
  async updateAllActiveCompra(): Promise<void> {
    return this.mascotaService.updateAllActive();
  }
 
}




