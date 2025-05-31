import { empresaInfo } from "../entities/empresaInfo";

export class EmpresaService {
  async create(data: {
    nombre_empresa: string;
    ruc: string;
    representante_legal: string;
  }): Promise<empresaInfo> {
    const empresa = new empresaInfo();
    empresa.nombre_empresa = data.nombre_empresa;
    empresa.ruc = data.ruc;
    empresa.representante_legal = data.representante_legal;
    return await empresa.save();
  }

  async findAll(): Promise<empresaInfo[]> {
    return await empresaInfo.find({ relations: ["donante"] });
  }

  async findOne(id: number): Promise<empresaInfo | null> {
    return await empresaInfo.findOne({
      where: { id },
      relations: ["donante"],
    });
  }

  async update(id: number, data: Partial<empresaInfo>): Promise<empresaInfo | null> {
    const empresa = await empresaInfo.findOneBy({ id });
    if (!empresa) return null;
    Object.assign(empresa, data);
    return await empresa.save();
  }

  async delete(id: number): Promise<boolean> {
    const result = await empresaInfo.delete(id);
    return result.affected !== 0;
  }
}


