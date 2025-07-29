import { Donante } from "../entities/donante";
import { empresaInfo } from "../entities/empresaInfo";

export class DonanteService {
  async create(data: {
    nombre: string;
    apellido: string;
    tipo_donante: string;
    telefono: string;
    correo: string;
    password: string;
    empresa?: empresaInfo;
  }): Promise<Donante> {
    const donante = new Donante();
    donante.nombre = data.nombre;
    donante.apellido = data.apellido;
    donante.tipo_donante = data.tipo_donante;
    donante.telefono = data.telefono;
    donante.correo = data.correo;
    donante.password = data.password;
    if (data.empresa) {
      donante.empresa = data.empresa;
    }
    return await donante.save();
  }

  async findAll(): Promise<Donante[]> {
    return await Donante.find({ relations: ["empresa"] });
  }

  async findOne(id: number): Promise<Donante | null> {
    return await Donante.findOne({
      where: { id },
      relations: ["empresa"],
    });
  }

  async update(id: number, data: Partial<Donante>): Promise<Donante | null> {
    const donante = await Donante.findOneBy({ id });
    if (!donante) return null;
    Object.assign(donante, data);
    return await donante.save();
  }

  async delete(id: number): Promise<boolean> {
    const result = await Donante.delete(id);
    return result.affected !== 0;
  }
}
