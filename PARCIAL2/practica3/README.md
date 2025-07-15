Practica 3 del parcial 2 usanndo 3 entidades del proyecto.

# Se usaron 3 entidades del modulo de adminsitracion del proyecto de donaciones,en la cual un administrador se puede registrar y a la vez poder registrar en agenda los eventos y los tipos de reportes con una descripcion breve.

# Entidades utilizadas:
---

Adminsitrador

---


agenda-eventos

---


tipo-reportes


---


### `clonacion`


---


1.crear una carpeta

---


2.Clonar carpeta de nombre:

---


3.Ejecutar e instalar las dependencia

---

instalar dependencias
---

npm install
---

ejecutar para iniciar el proyecto npm run start:dev
---
ingresar postman con sokect.io
ws://localhost:3000/



---



Para Crear:
envia:
createAdministrator

recibe(emite):
newAdministrator

Para actualizar:
envia:
updateAdministrator

recibe (emite):
cambios


Para eliminar:
envia:
removeAdministrator

recibe(emite):
newList


Para Crear:
envia:
createAgenda

recibe:
newAgenda


Para actualizar:
envia:
updateAgenda

recibe (emite):
cambiosAgenda


Para eliminar:
envia:
removeAgenda

recibe (emite):
agendaList


Para Crear:
envia:
createReportType

recibe (emite):
newReporte

Para actualizar:
envia:
updateReportType

recibe (emite):
cambiosReportes

Para eliminar:
envia:
removeReportType


recibe (emite):
reporteList




### ejemplos para crear un administrador:

{
  "nombre": "Karla",
  "usuario": "karla123",
  "correo": "karla@example.com",
  "password": "myStrongPass789"
}

{
  "nombre": "Michael",
  "usuario": "Maicol",
  "correo": "micha@example.com",
  "password": "myStrongPass789"
}

{
  "nombre": "Valerio",
  "usuario": "vale123",
  "correo": "valeria@example.com",
  "password": "myStrongPass789"
}

{
  "nombre": "Norelis",
  "usuario": "Noree",
  "correo": "norelis@example.com",
  "password": "myStrongPass789"
}

para actualizar solo agregue el campo id del administrador que desee actualizar (la id puede variar depende del admin y el id)

ejemplo:
{
  "id": 1
  "nombre": "Karla",
  "usuario": "karlita",
  "correo": "karla@example.com",
  "password": "myStrongPass789"
}

para eliminar solo con colocar la id  del administrador  se eliman sus datos. (solo con poner un solo numero entero al enviar, el que recibe se le muestra una lista sin los datos que elimino)
ejemplo:

1

(con un solo numero al enviar , se elimina el dato, el numero varia depende del administrador a eliminar)




ejemplo para crear reportes:

{
  "tipo": "Donación",
  "reporte": "Se recibió una donación de alimentos por parte de la Asociación Vecinal."
}


{
  "tipo": "Evento",
  "reporte": "Se realizó con éxito la feria de recaudación de víveres en el parque central."
}



{
  "tipo": "Distribución",
  "reporte": "Se entregaron 50 kits de alimentos a familias en situación vulnerable."
}



{
  "tipo": "Finanzas",
  "reporte": "Se recaudaron $1500 en efectivo durante el último evento solidario."
}

(aplicar los mismos pasos anteriores)


ejemplo para crear  registro en agendas



{
  "titulo": "Reunión de voluntarios",
  "descripcion": "Planificación de la próxima campaña de donación",
  "fecha": "2025-07-20",
  "estado": "Pendiente"
}


{
  "titulo": "Entrega de víveres",
  "descripcion": "Distribución de alimentos a familias registradas",
  "fecha": "2025-07-22",
  "estado": "En Proceso"
}



{
  "titulo": "Revisión financiera",
  "descripcion": "Análisis de ingresos y gastos de la última campaña",
  "fecha": "2025-07-28",
  "estado": "Pendiente"
}



