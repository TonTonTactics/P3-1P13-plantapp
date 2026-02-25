"""

Antony Wiegand, McMaster, 2026"""

from sqlmodel import Field, SQLModel
from datetime import date

class Sensor(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    sensor_id: str
    moisture: float
    temperature: float
    humidity: float
    timestamp: date = Field(default_factory=date.today)

class CreateSensor(SQLModel):
    sensor_id: str
    moisture: float
    temperature: float
    humidity: float

# do we neex indexes? its just adding = Field(index=True)

class Guide(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    