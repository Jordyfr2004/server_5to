
from db import get_connection

def crear_tablas():
    conn = get_connection()
    cur = conn.cursor()
    
    cur.execute("""
    CREATE TABLE IF NOT EXISTS boleta_votacion (
        id SERIAL PRIMARY KEY,
        opciones TEXT[],
        tipo_eleccion VARCHAR(100)
    );
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS votante_habilitado (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100),
        habilitado BOOLEAN
    );
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS sesion_votacion (
        id SERIAL PRIMARY KEY,
        id_votante INTEGER REFERENCES votante_habilitado(id),
        inicio TIMESTAMP,
        fin TIMESTAMP
    );
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS registro_voto (
        id SERIAL PRIMARY KEY,
        id_boleta INTEGER REFERENCES boleta_votacion(id),
        seleccion VARCHAR(255),
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS confirmacion_voto (
        id SERIAL PRIMARY KEY,
        id_voto INTEGER REFERENCES registro_voto(id),
        confirmado BOOLEAN
    );
    """)

    conn.commit()
    cur.close()
    conn.close()

if __name__ == "__main__":
    crear_tablas()
