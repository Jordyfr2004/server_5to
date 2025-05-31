import { AppDataSource } from "../data-source";
import {
    createAdmin,
    createDonante,
    createEmpresaInfo,
    createUbicacion,
    createTipoEmpresa
} from "../crud/crud";
import { Admin } from "../entities/admin";
import { Donante } from "../entities/donante";
import { empresaInfo } from "../entities/empresaInfo";

const seed = async () => {
    await AppDataSource.initialize();
    console.log("Conexión a la base de datos establecida.");

    // Seed Admins
    await Promise.all([
        createAdmin("Carlos", "Pérez", 123456789, "carlos@example.com", "pass123"),
        createAdmin("Lucía", "Martínez", 987654321, "lucia@example.com", "pass456"),
        createAdmin("Roberto", "López", 555123456, "roberto@example.com", "pass789"),
        createAdmin("María", "Gómez", 444987654, "maria@example.com", "pass000"),
        createAdmin("Ana", "Ruiz", 333888777, "ana@example.com", "pass999"),
    ]);

    // Seed Tipos de Empresa
    const [tipoComercial, tipoONG] = await Promise.all([
        createTipoEmpresa("Comercial"),
        createTipoEmpresa("ONG"),
    ]);

    // === Seed Donantes ===

    // Naturales (sin empresa, con dirección)
    const [natural1, natural2] = await Promise.all([
        createDonante("Juan", "Sánchez", "Individual", "111222333", "juan@example.com", "dona123"),
        createDonante("Pedro", "Navarro", "Individual", "333444555", "pedro@example.com", "dona789"),
    ]);

    await Promise.all([
        createUbicacion("Calle 123", "Ciudad A", "Provincia X", natural1.id),
        createUbicacion("Avenida 456", "Ciudad B", "Provincia Y", natural2.id),
    ]);

    // Jurídicos (con empresa y ubicación)
    const [juridico1, juridico2, juridico3, juridico4] = await Promise.all([
        createDonante("Elena", "Torres", "Empresa", "222333444", "elena@example.com", "dona456"),
        createDonante("Laura", "Mendoza", "ONG", "444555666", "laura@example.com", "dona000"),
        createDonante("Diego", "Castro", "Gobierno", "555666777", "diego@example.com", "dona999"),
        createDonante("Patricia", "Vega", "Empresa", "999888777", "patricia@example.com", "dona321"),
    ]);

    await Promise.all([
        createEmpresaInfo("TechCorp", "12345678901", "José Pérez", tipoComercial.id, juridico1.id),
        createEmpresaInfo("SolidaridadPlus", "32165498701", "Laura López", tipoONG.id, juridico2.id),
        createEmpresaInfo("Fundación Vida", "78945612301", "Ana Ramírez", tipoONG.id, juridico3.id),
        createEmpresaInfo("GreenPower S.A.", "65498732101", "Carlos Ruiz", tipoComercial.id, juridico4.id),
    ]);

    await Promise.all([
        createUbicacion("Zona Industrial, Manzana 4", "Ciudad C", "Provincia Z", juridico1.id),
        createUbicacion("Av. Central #90", "Ciudad D", "Provincia W", juridico2.id),
        createUbicacion("Oficina 102, Edif. Norte", "Ciudad E", "Provincia V", juridico3.id),
        createUbicacion("Calle Comercio #11", "Ciudad F", "Provincia U", juridico4.id),
    ]);

    // Mostrar los datos insertados
    const admins = await AppDataSource.getRepository(Admin).find();
    const donantes = await AppDataSource.getRepository(Donante).find({ relations: ["empresa", "ubicaciones"] });
    const empresas = await AppDataSource.getRepository(empresaInfo).find({ relations: ["donante", "tipo"] });

    console.log("\n Admins:", admins);
    console.log("\n Donantes:", donantes);
    console.log("\n Empresas:", empresas);

    await AppDataSource.destroy();
    console.log("\n Seed finalizado correctamente.");
};

seed().catch((error) => {
    console.error(" Error al insertar datos de prueba:", error);
});


