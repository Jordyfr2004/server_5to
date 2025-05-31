import { AppDataSource } from "../data-source";
import { getAdminById, getDonanteById, getEmpresaById, getUbicacionById, getTipoEmpresaById } from "../crud/crud_consultas"; // Asegúrate de importar tus funciones getById

// Actualizar Admin
export const updateAdmin = async (
    id: number,
    nombre: string,
    apellido: string,
    telefono: number,
    correo: string,
    password: string
) => {
    const admin = await getAdminById(id);
    if (admin) {
        admin.nombre = nombre;
        admin.apellido = apellido;
        admin.telefono = telefono;
        admin.correo = correo;
        admin.password = password;
        return await AppDataSource.manager.save(admin);
    }
    return null;
};

// Actualizar Donante
export const updateDonante = async (
    id: number,
    nombre: string,
    apellido: string,
    tipo_donante: string,
    telefono: string,
    correo: string,
    password: string
) => {
    const donante = await getDonanteById(id);
    if (donante) {
        donante.nombre = nombre;
        donante.apellido = apellido;
        donante.tipo_donante = tipo_donante;
        donante.telefono = telefono;
        donante.correo = correo;
        donante.password = password;
        return await AppDataSource.manager.save(donante);
    }
    return null;
};

// Actualizar empresaInfo
export const updateEmpresaInfo = async (
    id: number,
    nombre_empresa: string,
    ruc: string,
    representante_legal: string
) => {
    const empresa = await getEmpresaById(id);
    if (empresa) {
        empresa.nombre_empresa = nombre_empresa;
        empresa.ruc = ruc;
        empresa.representante_legal = representante_legal;
        return await AppDataSource.manager.save(empresa);
    }
    return null;
};

// Actualizar Ubicación
export const updateUbicacion = async (
    id: number,
    direccion: string,
    ciudad: string,
    provincia: string
) => {
    const ubicacion = await getUbicacionById(id);
    if (ubicacion) {
        ubicacion.direccion = direccion;
        ubicacion.ciudad = ciudad;
        ubicacion.provincia = provincia;
        return await AppDataSource.manager.save(ubicacion);
    }
    return null;
};

// Actualizar Tipo de Empresa
export const updateTipoEmpresa = async (
    id: number,
    tipo_empresa: string
) => {
    const tipo = await getTipoEmpresaById(id);
    if (tipo) {
        tipo.tipo_empresa = tipo_empresa;
        return await AppDataSource.manager.save(tipo);
    }
    return null;
};


