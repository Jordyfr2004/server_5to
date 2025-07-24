# 🧩 Práctica 4: Microservicios con NestJS + NATS

## 👨‍💻 Integrantes del grupo

- Andrés García (Módulo: Donante – TypeScript)
- [Integrante 2]
- [Integrante 3]

---

## 🏗️ Arquitectura del Proyecto

```
┌────────────────────┐     NATS      ┌─────────────────────────┐
│    API Gateway     │  ◀────────▶   │  Microservicio Donante  │
│  (localhost:3000)  │               │  (localhost:3001)       │
└────────────────────┘               └─────────────────────────┘
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

#### API Gateway:
cd gateway
npm run start:dev
```

---

## 📡 Endpoints REST disponibles (a través del Gateway)

| Método | Ruta                         | Descripción           |
|--------|------------------------------|-----------------------|
| POST   | `/api/donantes`              | Crear donante         |
| GET    | `/api/donantes`              | Listar donantes       |
| GET    | `/api/donantes/:id`          | Obtener por ID        |
| PATCH  | `/api/donantes/:id`          | Actualizar donante    |
| DELETE | `/api/donantes/:id`          | Eliminar donante      |
| POST   | `/api/administrador`         | Crear donante         |
| GET    | `/api/administrador`         | Listar donantes       |
| GET    | `/api/administrador/:id`     | Obtener por ID        |
| PATCH  | `/api/administrador/:id`     | Actualizar donante    |
| DELETE | `/api/administrador/:id`     | Eliminar donante      |

---

## 📸 Evidencias

> A continuación se muestran capturas de pruebas realizadas en Postman.

### ✅ Crear Donante
![crear](./evidencias/post-donante.png)

### ✅ Obtener Todos
![todos](./evidencias/get-donantes.png)

### ✅ Obtener por ID
![uno](./evidencias/get-donante-id.png)

### ✅ Actualizar Donante
![actualizar](./evidencias/patch-donante.png)

### ✅ Eliminar Donante
![eliminar](./evidencias/delete-donante.png)


### ✅ Crear Administrador
![crear](./evidencias/post-donante.png)

### ✅ Obtener Todos
![todos](./evidencias/get-image.png)

### ✅ Obtener por ID
![uno](./evidencias/get_id-image.png)

### ✅ Actualizar Administrador
![actualizar](./evidencias/patch-image.png)

### ✅ Eliminar Administrador
![eliminar](./evidencias/delete-image.png)

### ✅ Crear Administrador
![crear](./evidencias/post-image.png)

> 📂 Coloca estas imágenes dentro de una carpeta `evidencias/` junto al README.md

---

## 💡 Conclusiones personales

> Andrés García:  
> > Esta práctica me ayudó a comprender cómo funciona la comunicación entre microservicios mediante NATS, así como la separación entre API Gateway y lógica de negocio. El reto fue entender cómo conectar correctamente el Gateway sin que Nest arrojara errores de dependencias. También reforcé el uso de DTOs y validaciones en ambos extremos.


> Jordy Franco:  
> > La practica ayudó a comprender cómo funciona la comunicación entre microservicios mediante NATS,aunque fue un poco complicado la conexion entre en microservicio con NATS. El reto fue entender cómo conectar correctamente el Gateway sin que Nest arrojara errores de dependencias, en mi caso si hubo uno mas que otros errores pero fue por la insonsistencia entre variables lo que causo que tardar en conectarlos.Luego de verificar la conexion , se comprobo que si realizaba acciones como post, delete, update y get.


(Agregar reflexiones personales de los demás si es grupal)

---

## 📁 Estructura de carpetas

```
proyecto-servidores/
│
├── gateway/           # API Gateway REST
├── donante-ms/        # Microservicio con lógica de donantes
├── administrador-ms/ # Microservicio de la logica con administradores
├── evidencias/        # Capturas de Postman
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

---

## 📚 Tecnologías utilizadas

- NestJS
- NATS
- Postman (pruebas)
- TypeScript

---

## 👨‍🏫 Docente

[Nombre del profesor] – [Materia]