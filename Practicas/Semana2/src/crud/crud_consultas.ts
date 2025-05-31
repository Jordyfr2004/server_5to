import { AppDataSource } from "../data-source";
import { Admin } from "../entities/admin";
import { Donante } from "../entities/donante";
import { empresaInfo } from "../entities/empresaInfo";
import { Ubicacion } from "../entities/ubicacion";
import { Tipoempresas } from "../entities/tipos_empresa";

// Obtener todos los Admins
export const getAllAdmins = async () => {
    return await AppDataSource.manager.find(Admin);
};

// Obtener Admin por ID
export const getAdminById = async (id: number) => {
    return await AppDataSource.manager.findOne(Admin, { where: { id } });
};

// Obtener todos los Donantes
export const getAllDonantes = async () => {
    return await AppDataSource.manager.find(Donante);
};

// Obtener Donante por ID
export const getDonanteById = async (id: number) => {
    return await AppDataSource.manager.findOne(Donante, { where: { id } });
};

// Obtener todas las empresas
export const getAllEmpresas = async () => {
    return await AppDataSource.manager.find(empresaInfo);
};

// Obtener empresa por ID
export const getEmpresaById = async (id: number) => {
    return await AppDataSource.manager.findOne(empresaInfo, { where: { id } });
};

// Obtener todas las ubicaciones
export const getAllUbicaciones = async () => {
    return await AppDataSource.manager.find(Ubicacion);
};


// Obtener todos los tipos de empresa registrados
export const getTiposDeEmpresa = async () => {
    return await AppDataSource.manager.find(Tipoempresas);
};


// Obtener ubicación por ID
export const getUbicacionById = async (id: number) => {
    return await AppDataSource.manager.findOne(Ubicacion, { where: { id } });
};

// Obtener tipo de empresa por ID
export const getTipoEmpresaById = async (id: number) => {
    return await AppDataSource.manager.findOne(Tipoempresas, { where: { id } });
};



