import { AppDataSource } from "../data-source";
import { getAdminById, getDonanteById, getEmpresaById, getTipoEmpresaById,getUbicacionById } from "../crud/crud_consultas"; // Asegúrate de tener estas funciones

// Eliminar Admin
export const deleteAdmin = async (id: number) => {
    const admin = await getAdminById(id);
    if (admin) {
        await AppDataSource.manager.remove(admin);
        return true;
    }
    return false;
};

// Eliminar Donante
export const deleteDonante = async (id: number) => {
    const donante = await getDonanteById(id);
    if (donante) {
        await AppDataSource.manager.remove(donante);
        return true;
    }
    return false;
};

// Eliminar empresaInfo
export const deleteEmpresaInfo = async (id: number) => {
    const empresa = await getEmpresaById(id);
    if (empresa) {
        await AppDataSource.manager.remove(empresa);
        return true;
    }
    return false;
};

// Eliminar Ubicación
export const deleteUbicacion = async (id: number) => {
    const ubicacion = await getUbicacionById(id);
    if (ubicacion) {
        await AppDataSource.manager.remove(ubicacion);
        return true;
    }
    return false;
};

// Eliminar Tipo de Empresa
export const deleteTipoEmpresa = async (id: number) => {
    const tipo = await getTipoEmpresaById(id);
    if (tipo) {
        await AppDataSource.manager.remove(tipo);
        return true;
    }
    return false;
};
