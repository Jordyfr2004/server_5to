import { Injectable } from '@nestjs/common';
import { Donante } from './entities/donante.entity';
import { CreateDonanteDto } from './dto/create-donante.dto';
import { UpdateDonanteDto } from './dto/update-donante.dto';

@Injectable()
export class DonantesService {
  private donantes: Donante[] = [
    {
      id: 1,
      nombre: 'Ana Pérez',
      correo: 'ana@correo.com',
      telefono: '0991234567',
      direccion: 'Av. Principal y Calle Falsa',
      fecha_registro: new Date(),
    },
  ];

  create(dto: CreateDonanteDto): Donante {
    const nuevo: Donante = {
      id: this.donantes.length + 1,
      ...dto,
      fecha_registro: new Date(),
    };
    this.donantes.push(nuevo);
    return nuevo;
  }

  findAll(): Donante[] {
    return this.donantes;
  }

  findOne(id: number): Donante | undefined {
    return this.donantes.find((d) => d.id === id);
  }

  update(id: number, dto: UpdateDonanteDto): Donante | undefined {
    const index = this.donantes.findIndex((d) => d.id === id);
    if (index === -1) return undefined;

    this.donantes[index] = {
      ...this.donantes[index],
      ...dto,
    };

    return this.donantes[index];
  }

  remove(id: number): Donante | undefined {
    const index = this.donantes.findIndex((d) => d.id === id);
    if (index === -1) return undefined;

    const eliminado = this.donantes[index];
    this.donantes.splice(index, 1);
    return eliminado;
  }
}
