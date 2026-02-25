"""

Antony Wiegand, McMaster, 2026"""

from sqlmodel import Session, select, delete, or_, col
from datetime import date

from . import models
from . import db

def create_sensors(sensor: models.CreateSensor):
    with Session(db.engine) as session:
        sensor_db = models.Sensor(**sensor.model_dump())
        session.add(sensor_db)
        session.commit()
        session.refresh(sensor_db)

def select_sensors(date: date):           # DATE MUST BE date(YYYY,MM,DD)
    with Session(db.engine) as session:
        statement = select(models.Sensor).where(models.Sensor.timestamp == date)
        results = session.exec(statement)
        sensors = results.all()
        return sensors

def delete_sensors(date: date):           # DATE MUST BE date(YYYY,MM,DD)
    with Session(db.engine) as session:
        statement = delete(models.Sensor).where(models.Sensor.timestamp <= date) # <--CHECK IF THIS ACTUALLY WORKS
        session.exec(statement)
        session.commit()