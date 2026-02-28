import { useEffect, useState } from "react";

export function GetSensors() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    fetch(`/sensors/?date=${today}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  
  if (data.length === 0) {
    return <div>Error</div>;
  }

  return (
    <div>
      {data.map(sensor => (
        <div key={sensor.id}>
          TS: {sensor.timestamp} | 
          ID: {sensor.sensor_id} |
          M: {sensor.moisture} |
          H: {sensor.humidity} |
          T: {sensor.temperature}
        </div>
      ))}
    </div>
  );
}