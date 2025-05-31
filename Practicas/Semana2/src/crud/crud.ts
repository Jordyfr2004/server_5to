import { Admin } from "../entities/admin";
import { Donante } from "../entities/donante";
import { empresaInfo } from "../entities/empresaInfo";
import { AppDataSource } from "../data-source";
import { Ubicacion } from "../entities/ubicacion";
import { Tipoempresas } from "../entities/tipos_empresa";

// Crear Admin
export const createAdmin = async (
    nombre: string,
    apellido: string,
    telefono: number,
    correo: string,
    password: string
) => {
    const admin = new Admin();
    admin.nombre = nombre;
    admin.apellido = apellido;
    admin.telefono = telefono;
    admin.correo = correo;
    admin.password = password;
    return await AppDataSource.manager.save(admin);
};

// Crear Donante
export const createDonante = async (
    nombre: string,
    apellido: string,
    tipo_donante: string,
    telefono: string,
    correo: string,
    password: string
) => {
    const donante = new Donante();
    donante.nombre = nombre;
    donante.apellido = apellido;
    donante.tipo_donante = tipo_donante;
    donante.telefono = telefono;
    donante.correo = correo;
    donante.password = password;
    return await AppDataSource.manager.save(donante);
};

// Crear empresaInfo con relación a Tipoempresas y (opcionalmente) a Donante
export const createEmpresaInfo = async (
    nombre_empresa: string,
    ruc: string,
    representante_legal: string,
    tipo_empresa_id: number,
    donante_id?: number // opcional
) => {
    const empresa = new empresaInfo();
    empresa.nombre_empresa = nombre_empresa;
    empresa.ruc = ruc;
    empresa.representante_legal = representante_legal;

    // Buscar el tipo de empresa
    const tipo = await Tipoempresas.findOneBy({ id: tipo_empresa_id });
    if (!tipo) throw new Error("Tipo de empresa no encontrado");
    empresa.tipo = tipo;

    // Si se pasa donante_id, asociarlo también
    if (donante_id) {
        const donante = await Donante.findOneBy({ id: donante_id });
        if (!donante) throw new Error("Donante no encontrado");
        empresa.donante = donante;
    }

    return await AppDataSource.manager.save(empresa);
};

// Crear Ubicación
export const createUbicacion = async (
    direccion: string,
    ciudad: string,
    provincia: string,
    donante_id: number // para asociarla con un donante
) => {
    const ubicacion = new Ubicacion();
    ubicacion.direccion = direccion;
    ubicacion.ciudad = ciudad;
    ubicacion.provincia = provincia;

    // Asociar con donante
    const donante = await Donante.findOneBy({ id: donante_id });
    if (!donante) throw new Error("Donante no encontrado");
    ubicacion.donante = donante;

    return await AppDataSource.manager.save(ubicacion);
};

// Crear Tipo de Empresa
export const createTipoEmpresa = async (
    tipo_empresa: string
) => {
    const tipo = new Tipoempresas();
    tipo.tipo_empresa = tipo_empresa;
    return await AppDataSource.manager.save(tipo);
};



