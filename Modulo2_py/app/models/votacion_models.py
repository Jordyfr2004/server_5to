
class BoletaVotacion:
    def __init__(self, id_boleta, opciones, tipo_eleccion):
        self.id_boleta = id_boleta
        self.opciones = opciones
        self.tipo_eleccion = tipo_eleccion


class RegistroVoto:
    def __init__(self, id_voto, id_boleta, seleccion, timestamp):
        self.id_voto = id_voto
        self.id_boleta = id_boleta
        self.seleccion = seleccion
        self.timestamp = timestamp


class VotanteHabilitado:
    def __init__(self, id_votante, nombre, habilitado):
        self.id_votante = id_votante
        self.nombre = nombre
        self.habilitado = habilitado


class SesionVotacion:
    def __init__(self, id_sesion, id_votante, inicio, fin=None):
        self.id_sesion = id_sesion
        self.id_votante = id_votante
        self.inicio = inicio
        self.fin = fin


class ConfirmacionVoto:
    def __init__(self, id_confirmacion, id_voto, confirmado):
        self.id_confirmacion = id_confirmacion
        self.id_voto = id_voto
        self.confirmado = confirmado
