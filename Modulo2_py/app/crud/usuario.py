
from db import get_connection

def crear_votante(nombre):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("INSERT INTO votante_habilitado (nombre, habilitado) VALUES (%s, %s)", (nombre, True))
    conn.commit()
    cur.close()
    conn.close()

def obtener_votantes():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT id, nombre, habilitado FROM votante_habilitado")
    votantes = cur.fetchall()
    cur.close()
    conn.close()
    return votantes

def deshabilitar_votante(votante_id):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("UPDATE votante_habilitado SET habilitado = FALSE WHERE id = %s", (votante_id,))
    conn.commit()
    cur.close()
    conn.close()
