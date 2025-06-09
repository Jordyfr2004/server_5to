import { CreateUsuarioDto, UpdateUsuarioDto } from '../dtos';
import { Usuario } from '../entities/usuario.entity';

export abstract class UsuarioDatasource {

  abstract create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario>;

  abstract getAll(): Promise<Usuario[]>;

  abstract findById(id: number): Promise<Usuario>;

  abstract updateById(updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario>;

  abstract deleteById(id: number): Promise<Usuario>;

}
