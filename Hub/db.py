"""

Antony Wiegand, McMaster, 2026"""

from sqlmodel import SQLModel, create_engine

from . import models

sqlite_file_name = "hub/database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, echo=True, connect_args=connect_args) # remove echo when in production

def create_db_and_table():                  # lets us reuse creating a db (we need multiple dbs)
    SQLModel.metadata.create_all(engine)