import { Admin } from "../entities/admin";

export class AdminService {
  async create(data: {
    nombre: string;
    apellido: string;
    telefono: number;
    correo: string;
    password: string;
  }): Promise<Admin> {
    const admin = new Admin();
    admin.nombre = data.nombre;
    admin.apellido = data.apellido;
    admin.telefono = data.telefono;
    admin.correo = data.correo;
    admin.password = data.password;
    return await admin.save();
  }

  async findAll(): Promise<Admin[]> {
    return await Admin.find();
  }

  async findOne(id: number): Promise<Admin | null> {
    return await Admin.findOneBy({ id });
  }

  async update(id: number, data: Partial<Admin>): Promise<Admin | null> {
    const admin = await Admin.findOneBy({ id });
    if (!admin) return null;
    Object.assign(admin, data);
    return await admin.save();
  }

  async delete(id: number): Promise<boolean> {
    const result = await Admin.delete(id);
    return result.affected !== 0;
  }
}
