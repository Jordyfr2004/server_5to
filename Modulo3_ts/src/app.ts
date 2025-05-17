import { insertarCandidato, insertarEleccion, insertarPartido, insertarTipoEleccion, insertarUnidadVotacion } from "./crud";
import { initDatabase } from "./database";
import {consultarCandidatos,consultarElecciones,consultarPartidos,consultarTiposEleccion,consultarUnidadesDeVotacion} from "../src/crud_consultas"
import { actualizarCandidato,actualizarEleccion, actualizarPartido,actualizarTipoEleccion,actualizarUnidadVotacion } from "./crud_update";
async function main() {
  await initDatabase();

  // 1. Insertar tipo de elección
  //const tipo = await insertarTipoEleccion(" Estudiantil");
  //console.log("Tipo de elección creado:", tipo);

  // 2. Insertar partido
  //const partido = await insertarPartido("Alinza Estudiantil");
  //console.log("Partido creado:", partido);

  // 3. Insertar elección (requiere tipoEleccionId)
  //const eleccion = await insertarEleccion("Elección 2025", new Date("2025-12-01"), tipo.id);
  //console.log("Elección creada:", eleccion);

  // 4. Insertar candidato (requiere eleccionId y partidoId)
  //const candidato = await insertarCandidato("Juan Mero", eleccion.id, partido.id);
  //console.log("Candidato creado:", candidato);

  // 5. Insertar unidad de votación (opcional: reporta_resultados = true/false)
  //const unidad = await insertarUnidadVotacion("Noveno A", true);
  //console.log("Unidad de votación creada:", unidad);

    // Consultar tipos de elección
  const tipos = await consultarTiposEleccion();
  console.log("Todos los tipos de elección:", tipos);

  // Consultar partidos
  const partidos = await consultarPartidos();
  console.log("Todos los partidos:", partidos);

  // Consultar elecciones
  const elecciones = await consultarElecciones();
  console.log("Todas las elecciones:", elecciones);

  // Consultar candidatos
  const candidatos = await consultarCandidatos();
  console.log("Todos los candidatos:", candidatos);

  // Consultar unidades de votación
  const unidades = await consultarUnidadesDeVotacion();
  console.log("Todas las unidades de votación:", unidades);

  // Ejemplo: actualizar un tipo de elección con id 1
  //const tipoActualizado = await actualizarTipoEleccion(1, "Universitario");
  //console.log("Tipo de elección actualizado:", tipoActualizado);

  // Ejemplo: actualizar un partido con id 1
  //const partidoActualizado = await actualizarPartido(1, "Poder universitario");
  //console.log("Partido actualizado:", partidoActualizado);

  // Ejemplo: actualizar una elección con id 1 (nombre, fecha, id tipoEleccion)
  //const eleccionActualizada = await actualizarEleccion(1, "Elección 2026", new Date("2026-01-01"), 1);
  //console.log("Elección actualizada:", eleccionActualizada);

  // Ejemplo: actualizar un candidato con id 1 (nombre, id eleccion, id partido)
  //const candidatoActualizado = await actualizarCandidato(1, "karla Mendoza", 1, 1);
  //console.log("Candidato actualizado:", candidatoActualizado);

  // Ejemplo: actualizar unidad de votación con id 1 (nombre, reporta_resultados)
  //const unidadActualizada = await actualizarUnidadVotacion(1, "Informatica", true);
  //console.log("Unidad de votación actualizada:", unidadActualizada);


}


main();

