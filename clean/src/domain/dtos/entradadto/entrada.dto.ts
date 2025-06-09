export class CreateEntradaDto {
  constructor(
    public readonly tipo: string,
    public readonly precio: number,
    public readonly cantidad: number,
    public readonly requiere_id: boolean,
    public readonly funcionId: number,
    public readonly usuarioId: number,
    public readonly asientosIds: number[]
  ) {}

  static create(object: { [key: string]: any }): [string?, CreateEntradaDto?] {
    const { tipo, precio, cantidad, requiere_id = false, funcionId, usuarioId, asientosIds = [] } = object;

    if (!tipo) return ['Tipo es requerido'];
    if (precio === undefined) return ['Precio es requerido'];
    if (cantidad === undefined) return ['Cantidad es requerida'];
    if (!funcionId) return ['ID de función es requerido'];
    if (!usuarioId) return ['ID de usuario es requerido'];

    return [
      undefined,
      new CreateEntradaDto(tipo, precio, cantidad, requiere_id, funcionId, usuarioId, asientosIds)
    ];
  }
}

export class UpdateEntradaDto {
  constructor(
    public readonly tipo?: string,
    public readonly precio?: number,
    public readonly cantidad?: number,
    public readonly requiere_id?: boolean,
    public readonly funcionId?: number,
    public readonly usuarioId?: number
  ) {}

  static create(object: { [key: string]: any }): [string?, UpdateEntradaDto?] {
    const { tipo, precio, cantidad, requiere_id, funcionId, usuarioId } = object;
    return [
      undefined,
      new UpdateEntradaDto(tipo, precio, cantidad, requiere_id, funcionId, usuarioId)
    ];
  }
}