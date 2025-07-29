import { CreateAsientoDto, UpdateAsientoDto } from '../dtos';
import { Asiento } from '../entities/asiento.entity';

export abstract class AsientoRepository {
  abstract create(dto: CreateAsientoDto): Promise<Asiento>;
  abstract updateById(dto: UpdateAsientoDto): Promise<Asiento>;
}