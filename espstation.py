'''Gabriel Walker 2026
P3 ESP8266 Wifi Module Code

TODO:
- Switch all temps to kelvin
- fix error detection with temps'''

import time
import network
import dht
from machine import Pin

# networkssid = ENTER SSID
# networkkey = ENTER NETWORK KEY

dhtsensor = dht.DHT22(Pin(15))

# pinetwork = network.WLAN(network.WLAN.IF_STA) # Might have to use .active() if the object doesn't start activated?

'''The following variables are for a system to detect clearly out of range temperatures and humidities.'''
intervalstart = time.time()
DHTSAMPLETIME = 5
tempsum = 0
templimits = [-40.0, 80.0]

humidsum = 0
humidlimits = [10.0, 80.0]

while True:
    timeloop = time.time() - intervalstart # This keeps track of time since the start of an interval. Interval duration can be set with DHTSAMPLETIME.
    '''if not pinetwork.isconnected():
        while not pinetwork.isconnected():
            pinetwork.connect (networkssid, networkkey)
            print ("Attempting to connect...")
            time.sleep(3000)

        print ("Connected to access point.")'''
    dhtsensor.measure ()
    tempsum += dhtsensor.temperature ()
    humidsum += dhtsensor.humidity ()
    
    if tempsum < (DHTSAMPLETIME * templimits [0]) or tempsum > (DHTSAMPLETIME * templimits [1]):# Print if temperature is out of range
        print ("Temperature reading outside of limits. Test sensor for incorrect readings.")

    else:
        print (dhtsensor.temperature ())

    if humidsum < (DHTSAMPLETIME * humidlimits [0]) or humidsum > (DHTSAMPLETIME * humidlimits [1]):
        print ("Humidity reading outside of limits. Test sensor for icorrect readinngs.")

    else:
        print (dhtsensor.humidity ())

    if timeloop > DHTSAMPLETIME: # Reset the average temp value and reset the time since interval
        intervalstart = time.time ()
        tempsum = 0

    time.sleep(2)
