# 🧩 Práctica 4: Microservicios con NestJS + NATS

## 👨‍💻 Integrantes del grupo

- Andrés García (Módulo: Donante – TypeScript)
- Jereny Vera (Módulo: Solicitud – TypeScript)
- [Integrante 3]

---

## 🏗️ Arquitectura del Proyecto

```

┌────────────────────┐     NATS      ┌─────────────────────────┐     NATS      ┌────────────────────────────┐
│    API Gateway     │  ◀────────▶   │  Microservicio Donante  │  ◀────────▶   │  Microservicio Solicitud   │
│  (localhost:3000)  │               │  (localhost:3001)       │               │  (localhost:3002)          │
└────────────────────┘               └─────────────────────────┘               └────────────────────────────┘
```

---

## 🚀 Instrucciones de ejecución

### 1. Clonar el repositorio

git clone https://github.com/usuario/proyecto-servidores.git
cd proyecto-servidores

```


### 2. Instalar dependencias
cd gateway
npm install
cd ../donante-ms
npm install
cd ../solicitud
npm install
```

### 3. Iniciar servidor NATS

Descargar desde: https://docs.nats.io/running-a-nats-service/introduction  
Y ejecutar:

nats-server.exe

```

> (O ejecutar el `.exe` desde carpeta bin)


### 4. Iniciar los servicios

#### Microservicio Donante:
cd donante-ms
npm run start:dev
```

#### Microservicio Solicitud:

cd ../solicitud
npm run start:dev

```

#### API Gateway:
cd ../gateway
npm run start:dev
```

---

## 📡 Endpoints REST disponibles (a través del Gateway)

### Donantes

| Método | Ruta                | Descripción        |
| ------ | ------------------- | ------------------ |
| POST   | `/api/donantes`     | Crear donante      |
| GET    | `/api/donantes`     | Listar donantes    |
| GET    | `/api/donantes/:id` | Obtener por ID     |
| PATCH  | `/api/donantes/:id` | Actualizar donante |
| DELETE | `/api/donantes/:id` | Eliminar donante   |

### Administradores

| Método | Ruta                     | Descripción              |
| ------ | ------------------------ | ------------------------ |
| POST   | `/api/administrador`     | Crear administrador      |
| GET    | `/api/administrador`     | Listar administradores   |
| GET    | `/api/administrador/:id` | Obtener por ID           |
| PATCH  | `/api/administrador/:id` | Actualizar administrador |
| DELETE | `/api/administrador/:id` | Eliminar administrador   |

### Solicitudes

| Método | Ruta                 | Descripción          |
| ------ | -------------------- | -------------------- |
| POST   | `/api/solicitud`     | Crear solicitud      |
| GET    | `/api/solicitud`     | Listar solicitudes   |
| GET    | `/api/solicitud/:id` | Obtener por ID       |
| PATCH  | `/api/solicitud/:id` | Actualizar solicitud |
| DELETE | `/api/solicitud/:id` | Eliminar solicitud   |

---

## 📸 Evidencias

> A continuación se muestran capturas de pruebas realizadas en Postman.

### Donante

#### ✅ Crear Donante

![crear](./evidencias/donante/post-donante.png)

#### ✅ Obtener Todos

![todos](./evidencias/donante/get-donantes.png)

#### ✅ Obtener por ID

![uno](./evidencias/donante/get-donante-id.png)

#### ✅ Actualizar Donante

![actualizar](./evidencias/donante/patch-donante.png)

#### ✅ Eliminar Donante

![eliminar](./evidencias/donante/delete-donante.png)

### Administrador

#### ✅ Crear Administrador

![crear](./evidencias/administrador/post-image.png)

#### ✅ Obtener Todos

![todos](./evidencias/administrador/get-image.png)

#### ✅ Obtener por ID

![uno](./evidencias/administrador/get_id-image.png)

#### ✅ Actualizar Administrador

![actualizar](./evidencias/administrador/patch-image.png)

#### ✅ Eliminar Administrador

![eliminar](./evidencias/administrador/delete-image.png)

### Solicitud

#### ✅ Crear Solicitud

![crear](./evidencias/solicitud/WhatsApp Image 2025-07-24 at 00.07.19.jpeg)

#### ✅ Obtener Todos

![todos](./evidencias/solicitud/WhatsApp Image 2025-07-24 at 00.06.50.jpeg)

#### ✅ Obtener por ID

![uno](./evidencias/solicitud/WhatsApp Image 2025-07-24 at 00.06.57.jpeg)

#### ✅ Actualizar Solicitud

![actualizar](./evidencias/solicitud/WhatsApp Image 2025-07-24 at 00.07.30.jpeg)

#### ✅ Eliminar Solicitud

![eliminar](./evidencias/solicitud/WhatsApp Image 2025-07-24 at 00.05.58.jpeg)

> 📂 Coloca estas imágenes dentro de la carpeta `evidencias/` junto al README.md

---

## 💡 Conclusiones personales

> Andrés García:
>
> > Esta práctica me ayudó a comprender cómo funciona la comunicación entre microservicios mediante NATS, así como la separación entre API Gateway y lógica de negocio. El reto fue entender cómo conectar correctamente el Gateway sin que Nest arrojara errores de dependencias. También reforcé el uso de DTOs y validaciones en ambos extremos.

> Jordy Franco:
>
> > La practica ayudó a comprender cómo funciona la comunicación entre microservicios mediante NATS,aunque fue un poco complicado la conexion entre en microservicio con NATS. El reto fue entender cómo conectar correctamente el Gateway sin que Nest arrojara errores de dependencias, en mi caso si hubo uno mas que otros errores pero fue por la insonsistencia entre variables lo que causo que tardar en conectarlos.Luego de verificar la conexion , se comprobo que si realizaba acciones como post, delete, update y get.

(Agregar reflexiones personales de los demás si es grupal)

> Jereny Vera:
>
> > Trabajar en el microservicio de solicitud fue un verdadero reto, sobre todo al entender cómo debía comunicarse con el gateway y los demás servicios usando NATS. Al principio me costó organizar bien los DTOs y la validación, pero al ver que las solicitudes fluían correctamente y se reflejaban en las pruebas, sentí mucha satisfacción. Me gustó ver cómo cada microservicio puede crecer de forma independiente y cómo todo se integra al final. Sin duda, esta práctica me ayudó a afianzar conceptos de arquitectura y comunicación entre servicios.

---

## 📁 Estructura de carpetas

```

proyecto-servidores/
│

├── gateway/ # API Gateway REST
├── donante-ms/ # Microservicio con lógica de donantes
├── administrador-ms/ # Microservicio de la lógica con administradores
├── solicitud/ # Microservicio de la lógica de solicitudes
├── evidencias/ # Capturas de Postman
└── README.md

```

---

## ✅ Estado del CRUD

- [x] Crear Donante (POST)
- [x] Listar Donantes (GET)
- [x] Buscar por ID (GET)
- [x] Actualizar (PATCH)
- [x] Eliminar (DELETE)

- [x] Crear Administrador (POST)
- [x] Listar Administradores (GET)
- [x] Buscar por ID (GET)
- [x] Actualizar (PATCH)
- [x] Eliminar (DELETE)

- [x] Crear Solicitud (POST)
- [x] Listar Solicitudes (GET)
- [x] Buscar por ID (GET)
- [x] Actualizar (PATCH)
- [x] Eliminar (DELETE)

---

## 📚 Tecnologías utilizadas

- NestJS
- NATS
- Postman (pruebas)
- TypeScript

---

## 👨‍🏫 Docente

[Nombre del profesor] – [Materia]

```

```
