import { CreateEntradaDto, UpdateEntradaDto } from '../dtos';
import { Entrada } from '../entities/entrada.entity';

export abstract class EntradaRepository {
  abstract create(dto: CreateEntradaDto): Promise<Entrada>;
  abstract updateById(dto: UpdateEntradaDto): Promise<Entrada>;
  // ...otros métodos
}