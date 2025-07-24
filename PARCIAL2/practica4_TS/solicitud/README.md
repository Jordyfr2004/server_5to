# Microservicio de Solicitud

> Proyecto individual como parte de la práctica grupal de microservicios con NestJS y NATS.

---

## 1. Integrantes del Grupo

- Nombre 1 (Gateway)
- Nombre 2 (Microservicio X)
- Nombre 3 (Microservicio Y)
- Martha Mero (Microservicio Solicitud)

---

## 2. Instrucciones de Ejecución

### Requisitos previos

- Node.js 16+
- NATS Server corriendo localmente (`nats-server`)
- API Gateway del grupo (ver carpeta `gateway/`)

### Pasos para levantar el sistema

1. Instala dependencias en el microservicio:
   ```bash
   cd solicitud
   npm install
   ```
2. Configura el archivo `.env`:
   ```env
   NATS_URL=nats://127.0.0.1:4222
   PORT=3001
   ```
3. Inicia el microservicio:
   ```bash
   npm run start
   ```
4. En otra terminal, inicia el API Gateway (ver instrucciones en su README).
5. Asegúrate de que el servidor NATS esté corriendo antes de iniciar los servicios.

---

## 3. Evidencias de Funcionamiento

> A continuación se muestran capturas de pantalla de pruebas realizadas a través del API Gateway usando Postman:

- **POST /api/solicitud**
  ![POST Solicitud](./evidencias/post-solicitud.png)
- **GET /api/solicitud**
  ![GET Solicitudes](./evidencias/get-solicitudes.png)
- **GET /api/solicitud/:id**
  ![GET Solicitud por ID](./evidencias/get-solicitud-id.png)
- **PUT /api/solicitud/:id**
  ![PUT Solicitud](./evidencias/put-solicitud.png)
- **DELETE /api/solicitud/:id**
  ![DELETE Solicitud](./evidencias/delete-solicitud.png)

---

## 4. Conclusiones Individuales

Durante el desarrollo de este microservicio aprendí a implementar la arquitectura de microservicios con NestJS y NATS, separando responsabilidades y facilitando la escalabilidad. El mayor reto fue asegurar la correcta comunicación entre el Gateway y los microservicios usando patrones de mensaje consistentes. Esta práctica refuerza la importancia del trabajo colaborativo y la documentación clara para lograr una integración exitosa.

---

## Estructura principal del microservicio

- Entidad: `solicitud.entity.ts`
- DTOs: `create-solicitud.dto.ts`, `update-solicitud.dto.ts`
- Servicio: `solicitud.service.ts`
- Controlador: `solicitud.controller.ts` (usa @MessagePattern)
- Módulo: `solicitud.module.ts`
- Configuración NATS: `.env`

---

## Variables de entorno

- `NATS_URL`: URL del servidor NATS
- `PORT`: Puerto del microservicio

---

## Notas

- Integra este microservicio con el API Gateway usando los mismos patrones de mensaje.
- Adapta la lógica según las necesidades de tu proyecto.

# production mode

$ npm run start:prod

````

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
````

## Deployment

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```
