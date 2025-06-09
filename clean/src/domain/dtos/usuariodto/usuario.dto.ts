export class CreateUsuarioDto {
  constructor(
    public readonly nombre: string,
    public readonly correo: string,
    public readonly tipo_usuario: string,
    public readonly es_estudiante: boolean
  ) {}

  static create(object: { [key: string]: any }): [string?, CreateUsuarioDto?] {
    const { nombre, correo, tipo_usuario, es_estudiante = false } = object;

    if (!nombre) return ['Nombre es requerido'];
    if (!correo) return ['Correo es requerido'];
    if (!tipo_usuario) return ['Tipo de usuario es requerido'];

    return [
      undefined,
      new CreateUsuarioDto(nombre, correo, tipo_usuario, es_estudiante)
    ];
  }
}

export class UpdateUsuarioDto {
  constructor(
    public readonly nombre?: string,
    public readonly correo?: string,
    public readonly tipo_usuario?: string,
    public readonly es_estudiante?: boolean
  ) {}

  static create(object: { [key: string]: any }): [string?, UpdateUsuarioDto?] {
    const { nombre, correo, tipo_usuario, es_estudiante } = object;
    return [
      undefined,
      new UpdateUsuarioDto(nombre, correo, tipo_usuario, es_estudiante)
    ];
  }
}