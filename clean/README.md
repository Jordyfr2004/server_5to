# Arquitectura Limpia - Todo API

Implementación de una API REST con arquitectura limpia que soporta múltiples tipos de datasource:
- **Prisma** (PostgreSQL)
- **TypeORM** (PostgreSQL)
- **Memory** (Arreglos de objetos literales en memoria)

## Características

### Arquitectura Limpia
- **Domain Layer**: Entidades, casos de uso, repositorios e interfaces
- **Infrastructure Layer**: Implementaciones de datasources y repositorios
- **Presentation Layer**: Controladores y rutas

### Datasources Disponibles
1. **Prisma**: Base de datos PostgreSQL con ORM Prisma
2. **TypeORM**: Base de datos PostgreSQL con TypeORM
3. **Memory**: Almacenamiento en memoria con arreglos de objetos literales

## Configuración y Desarrollo

### ⚡ Inicio Rápido - Sin Base de Datos (Recomendado para desarrollo)

```bash
# Instalar dependencias
npm install

# Ejecutar con datasource de memoria (NO requiere base de datos)
npm run dev:memory
```

¡Eso es todo! La aplicación funcionará completamente en memoria sin necesidad de Docker ni PostgreSQL.

### 🗄️ Con Base de Datos (Prisma/TypeORM)

#### Opción 1: Prisma
```bash
# 1. Crear archivo .env basado en .env.template
# 2. Configurar DATASOURCE_TYPE=PRISMA en .env
# 3. Ejecutar Docker
docker compose up -d
# 4. Migrar base de datos
npm run prisma:migrate:prod
# 5. Ejecutar aplicación
npm run dev:prisma
```

#### Opción 2: TypeORM
```bash
# 1. Crear archivo .env basado en .env.template
# 2. Configurar DATASOURCE_TYPE=TYPEORM en .env
# 3. Ejecutar Docker
docker compose up -d
# 4. Ejecutar aplicación
npm run dev:typeorm
```

## Scripts Disponibles

### Desarrollo
- `npm run dev` - Modo desarrollo (detecta DATASOURCE_TYPE automáticamente, por defecto: MEMORY)
- `npm run dev:memory` - Desarrollo con datasource de memoria
- `npm run dev:prisma` - Desarrollo con Prisma 
- `npm run dev:typeorm` - Desarrollo con TypeORM

### Producción
- `npm run start:memory` - Producción con datasource de memoria
- `npm run start:prisma` - Producción con Prisma
- `npm run start:typeorm` - Producción con TypeORM

## Variables de Entorno

Crea un archivo `.env` con las siguientes variables:

```bash
# Puerto de la aplicación
PORT=3000

# Tipo de datasource (MEMORY | PRISMA | TYPEORM)
# Default: MEMORY
DATASOURCE_TYPE=MEMORY

# Solo requerido para PRISMA/TYPEORM
POSTGRES_URL=postgresql://postgres:123456@localhost:5432/TodoDB

# Solo para Docker
POSTGRES_USER=postgres
POSTGRES_DB=TodoDB
POSTGRES_PASSWORD=123456
```

## API Endpoints

### Endpoints Unificados
- Base URL: `/api/todos`
- **Funciona con cualquier datasource** configurado
- Operaciones CRUD estándar

### Endpoints Específicos de Memoria
- Base URL: `/api/todos-memory`
- Operaciones CRUD + funcionalidades adicionales de gestión de datos
- **Siempre usa datasource de memoria**, independiente de la configuración

Para más detalles sobre los endpoints de memoria, consulta [MEMORY_DATASOURCE.md](./MEMORY_DATASOURCE.md)

## Casos de Uso

### 🧠 Memory Datasource (Recomendado para inicio)
- ✅ **Desarrollo rápido** sin configuración de base de datos
- ✅ **Testing** y prototipos instantáneos
- ✅ **Demos** y presentaciones
- ✅ **Aprendizaje** de arquitectura limpia
- ✅ **CI/CD** sin dependencias externas

### 🗄️ Prisma/TypeORM
- ✅ Aplicaciones en producción
- ✅ Persistencia de datos
- ✅ Aplicaciones multi-usuario
- ✅ Transacciones complejas

## Detección Automática de Datasource

La aplicación detecta automáticamente qué datasource usar:

1. **Variable de entorno `DATASOURCE_TYPE`** (prioridad alta)
2. **Script npm específico** (ej: `npm run dev:memory`)
3. **Por defecto**: MEMORY (si no se especifica nada)

### Logs de Inicio
La aplicación muestra claramente qué datasource está usando:

```bash
🔧 Starting application with datasource: MEMORY
🧠 Using memory datasource - no database initialization required
💾 Data will be stored in memory arrays and lost on restart
🔗 Available endpoints: /api/todos-memory
🎯 Datasource configured: MEMORY
```

## Testing

Puedes usar el archivo `memory-datasource.http` para probar la funcionalidad con tu cliente HTTP favorito (REST Client, Postman, etc.)

## Ventajas de esta Arquitectura

1. **🔄 Intercambiable**: Cambia entre datasources sin modificar código de negocio
2. **🚀 Inicio inmediato**: Funciona sin configuración con datasource de memoria
3. **🧪 Testing**: Ideal para pruebas sin dependencias externas
4. **📚 Educativo**: Perfecto para aprender arquitectura limpia
5. **🔧 Flexible**: Cada datasource para su caso de uso específico

## Documentación Adicional

- [Memory Datasource Guide](./MEMORY_DATASOURCE.md) - Guía completa del datasource de memoria
- [memory-datasource.http](./memory-datasource.http) - Ejemplos de peticiones HTTP

## Aplicación para la gestión de entradas al cine universitario.

La primera imagen se muestra la cartelera del cine.

![I1](./public/assets/images/I1.jpg)

La segunda imagen es donde se escoge la fecha y función definida para esta película.

![I2](./public/assets/images/I2.jpg)

En la tercera imagen podemos escoger el tipo de ticket asumiendo que algunos asistentes pueden ser externos a la universidad y deban pagar entrada.

![I3](./public/assets/images/I3.jpg)

En la cuarta imagen escogemos en la sala asociada al horario los asientos que como vimos en la imagen anterior pueden ser varios.

![I4](./public/assets/images/I4.jpg)



Cada iteración de los usuarios debe ir acompañada de reglas y consejos para el usuario a llevar en el interior del cine (en imágenes).


Documentacion de las entidades 


Película
Atributos:

id_pelicula

titulo

clasificación

formato

idioma

estado

es_preestreno

imagen_portada

Descripción: Representa cada una de las películas que se proyectan en el cine.

Justificación: Es la base del sistema. Toda función y entrada está relacionada con una película específica.



unción
Atributos:

id_funcion

fecha

hora

sala

formato

idioma

disponibilidad

Descripción: Representa una proyección específica de una película.

Justificación: Permite organizar cuándo, dónde y cómo se proyecta una película. Una misma película puede tener múltiples funciones en distintos días, horarios y salas.




Entrada 
Atributos:

id_ticket

tipo

precio

cantidad

requiere_id

Descripción: Corresponde a la compra o reserva de uno o varios boletos por parte de un usuario.

Justificación: Es clave para controlar el acceso, el aforo y registrar las ventas. Permite asociar entradas a funciones y a usuarios.



Usuario
Atributos:

id_usuario

nombre

correo

tipo_usuario

es_estudiante

Descripción: Representa a la persona que compra las entradas.

Justificación: Permite identificar quién realiza la compra, aplicar beneficios según su tipo y mantener un historial.



 Asiento
Atributos:

id_asiento

numero

estado

Descripción: Hace referencia a un lugar específico dentro de una sala para una función determinada.

Justificación: Permite gestionar la ocupación de las salas y garantizar que cada entrada tenga un asiento reservado.



Cine (Sede)
Atributos:

id_cine

nombre

ubicación

Descripción: Representa el lugar físico donde se proyectan las películas.

Justificación: Es útil para organizar funciones en diferentes espacios físicos o sedes del cine universitario.



Relaciones 

Una película puede tener muchas funciones.

Una función se realiza en un cine y está asociada a una película.

Una función tiene muchos asientos y muchas entradas.

Un usuario puede comprar muchas entradas.

Una entrada puede estar asociada a uno o más asientos.








