"""

Antony Wiegand, McMaster, 2026"""

from fastapi import FastAPI
from datetime import date
import uvicorn

from . import db
from . import relations
from . import models

app = FastAPI()

@app.on_event("startup")
def on_startup():
    db.create_db_and_table()     # lets us use python -m Hub.app without side effects from importing

@app.post("/sensors/")
def post_sensor(sensor: models.CreateSensor):
    relations.create_sensors(sensor)

@app.get("/sensors/")
def get_sensors(date: date):
    return relations.select_sensors(date)

@app.delete("/sensors/")
def delete_sensors(date: date):
    return relations.delete_sensors(date)

if __name__ == "__main__":
    uvicorn.run("Hub.app:app", reload= True)