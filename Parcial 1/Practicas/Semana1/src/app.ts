// Interfaces
interface Admin {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  contraseña: string;
}

interface Donante {
  id: number;
  nombre: string;
  apellido: string;
  tipoDonante: 'Natural' | 'Jurídico';
  telefono: string;
  correo: string;
  password: string;
}

interface EmpresaInfo {
  id_donante: number;
  nombreEmpresa: string;
  ruc: string;
  representanteLegal: string;
}

// Variables simples
let adminActivo: boolean = true;
let totalAdmins: number = 0;

// Objetos literales
const admin1: Admin = {
  id: 1,
  nombre: "Lucía",
  apellido: "Pérez",
  telefono: "0999999999",
  correo: "lucia@admin.com",
  contraseña: "admin123"
};

const donante1: Donante = {
  id: 101,
  nombre: "Carlos",
  apellido: "Ramírez",
  tipoDonante: "Natural",
  telefono: "0988888888",
  correo: "carlos@correo.com",
  password: "don123"
};

const empresa1: EmpresaInfo = {
  id_donante: 102,
  nombreEmpresa: "Donaciones S.A.",
  ruc: "1234567890001",
  representanteLegal: "Marta Gómez"
};

// Arreglos de objetos
const admins: Admin[] = [admin1];
const donantes: Donante[] = [donante1];
const empresas: EmpresaInfo[] = [empresa1];

// FUNCIONES PARA ADMIN

// Rest + Spread: agregar múltiples admins
function agregarAdmins(...nuevosAdmins: Admin[]) {
  admins.push(...nuevosAdmins);
  totalAdmins += nuevosAdmins.length;
}

// Mostrar admins
function mostrarAdmins() {
  console.log("Lista de Admins:");
  admins.forEach(a => {
    console.log(`Admin: ${a.nombre} ${a.apellido}, Correo: ${a.correo}`);
  });
}

// FUNCIONES PARA DONANTES

function agregarDonante(...nuevos: Donante[]) {
  donantes.push(...nuevos);
}

function mostrarDonantes(): void {
  console.log("Lista de Donantes:");
  donantes.forEach(d => {
    console.log(`Donante: ${d.nombre} ${d.apellido}, Tipo: ${d.tipoDonante}`);
  });
}

// Callback: filtrar donantes
function procesarDonantes(callback: (d: Donante) => boolean): Donante[] {
  return donantes.filter(callback);
}

// PROMISE simulando operación lenta
function obtenerEmpresasAsync(): Promise<EmpresaInfo[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(empresas);
    }, 2000);
  });
}

// ASYNC/AWAIT
async function mostrarEmpresas() {
  console.log("Cargando empresas...");
  const data = await obtenerEmpresasAsync();
  data.forEach(emp => {
    console.log(`Empresa: ${emp.nombreEmpresa}, RUC: ${emp.ruc}`);
  });
}

// DEMOSTRACIÓN

// Agregar admin
agregarAdmins({
  id: 2,
  nombre: "Marco",
  apellido: "Santos",
  telefono: "0971234567",
  correo: "marco@admin.com",
  contraseña: "admin456"
});

// Agregar donante
agregarDonante({
  id: 102,
  nombre: "Ana",
  apellido: "López",
  tipoDonante: "Jurídico",
  telefono: "0977777777",
  correo: "ana@empresa.com",
  password: "empresa456"
});

// Mostrar todos
mostrarAdmins();
mostrarDonantes();

const juridicos = procesarDonantes(d => d.tipoDonante === "Jurídico");
console.log("Donantes Jurídicos:", juridicos);

// Ejecutar función async
mostrarEmpresas();
