import os
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")  

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

def init_database():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))
            print(" Database initialized successfully")
        return {
            "engine": engine,
            "SessionLocal": SessionLocal,
            "Base": Base
        }
    except Exception as ex:
        print(" Error initializing database:", ex)
        raise ex
