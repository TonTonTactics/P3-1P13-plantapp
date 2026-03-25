""" Processing of data

Process data into words.

Antony Wiegand, McMaster, 2026"""

from statistics import median, StatisticsError

def rating(sensor_id, selected_data):

    m_list = selected_data.get("moisture", [])
    t_list = selected_data.get("temperature", [])
    h_list = selected_data.get("humidity", [])

    try:
        m = median(m_list)
        t = median(t_list)
        h = median(h_list)
    except StatisticsError:
        return [{
            "sensor_id": sensor_id,
            "water_next": None,
            "temperature_rating": None,
            "humidity_rating": None
        }]


    if m <= 1:
        water = "2 days"
    elif m <= 3:
        water = "3 days"
    elif m <= 5:
        water = "4 days"
    else:
        water = "5 days"
    
    if t < 10:
        temp_rating = "Bad"
    elif t <= 20:
        temp_rating = "Good"
    elif t <= 30:
        temp_rating = "Great"
    else:
        temp_rating = "Perfect"
    
    if h <= 30:
        hum_rating = "Bad"
    elif h <= 50:
        hum_rating = "Good"
    elif h <= 70:
        hum_rating = "Great"
    else:
        hum_rating = "Perfect"
    
    return [{
            "sensor_id": sensor_id,
            "water_next": water,
            "temperature_rating": temp_rating,
            "humidity_rating": hum_rating
            }]