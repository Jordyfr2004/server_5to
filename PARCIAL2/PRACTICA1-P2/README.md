Practica 1 del parcial 2 usanndo 3 entidades del proyecto
# Se usaron las entidades del modulo de administracion del proyecto de donaciones, en la cual un adminstrador se puede registrar y a la vez poder registrar en agenda los eventos y los tipos de reportes con una descripcion breve.

# instalar dependencias
npm install

#  ejecutar para iniciar el proyecto
npm run start:dev



# ejemplos para  probar los  endpoints en Postman:

# Solicitud GET ( para mostrar datos de administradores registrados)
http://localhost:3000/api/v1/administrador



# Solicitud POST (registrar administrador):

http://localhost:3000/api/v1/administrador

{
  "nombre": "Daniel Mero",
  "usuario": "thedani",
  "correo": "danin@example.com",
  "password": "adminseguro123"
}


{
  "nombre": "Lucía Torres",
  "usuario": "ltorres",
  "correo": "lucia.torres@example.com",
  "password": "claveSegura456"
}


{
  "nombre": "Fernando Mora",
  "usuario": "fmora",
  "correo": "fernando.mora@example.com",
  "password": "password12345"
}


{
  "nombre": "Andrea Vélez",
  "usuario": "avelez",
  "correo": "andrea.velez@example.com",
  "password": "contrasena9999"
}


{
  "nombre": "Juan Ramírez",
  "usuario": "jramirez",
  "correo": "juan.ramirez@example.com",
  "password": "miPassword000"
}

# Solicitud GET ( para mostrar datos de eventos registrados)
http://localhost:3000/api/v1/agenda-eventos




# Solicitud POST (registrar eventos en la agenda)
http://localhost:3000/api/v1/agenda-eventos


{
  "titulo": "Recibimiento de donaciones",
  "descripcion": "Recibir donaciones de donantes",
  "fecha": "2025-08-01",
  "estado": "pendiente"
}


{
  "titulo": "Entrega de donaciones en Manta",
  "descripcion": "Entega de donaciones en la ciudad de manta a personas de bajos recursos",
  "fecha": "2025-09-15T08:30:00Z",
  "estado": "pendiente"
}


{
  "titulo": "Reunion con donantes",
  "descripcion": "Se realizara una reunion con los donantes",
  "fecha": "2025-07-05",
  "estado": "pendiente"
}


{
  "titulo": "Entrega de donaciones en Montecristi ",
  "descripcion": "Se entregara donaciones a personas de bajos recursos ",
  "fecha": "2025-07-25",
  "estado": "pendiente"
}


{
  "titulo": "Entrega de reconocimientos",
  "descripcion": "Reconocimientos al personal destacado",
  "fecha": "2025-12-20",
  "estado": "confirmado"
}


# Solicitud GET ( para mostrar datos de los tipos de reportes registrados)
http://localhost:3000/api/v1/tipo-reportes



# Solicitud POST  ( para mostrar registrar los tipos de reportes y su descripcion registrados )
http://localhost:3000/api/v1/tipo-reportes


{
  "tipo": "Donacion de alimentos en mal estado",
  "reporte": "Se recibieron productos vencidos o en malas condiciones para el consumo humano."
}

{
  "tipo": "Falta de recursos",
  "reporte": "No se cuenta con materiales suficientes para cubrir las necesidades del área asignada."
}


{
  "tipo": "Donaciones no entregadas",
  "reporte": "Existen registros de donaciones que no han sido distribuidas a los destinatarios."
}


{
  "tipo": "Daño estructural",
  "reporte": "Se han identificado grietas o deterioro en las instalaciones que requieren atención inmediata."
}



{
  "tipo": "Robo y pérdida de objetos",
  "reporte": "Se reporta la desaparición material"
}



