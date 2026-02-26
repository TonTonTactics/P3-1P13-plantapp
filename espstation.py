'''Gabriel Walker 2026
P3 ESP8266 Wifi Module Code

TODO:
- Switch all temps to kelvin DONE
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
'''intervalstart = time.time()
DHTSAMPLETIME = 5
tempsum = 273.15
templimits = [233.15, 353.15]

humidsum = 0
humidlimits = [10.0, 80.0]'''

firstloop = True
MAXTEMPVARIANCE = 10
MAXHUMIDVARIANCE = 5

while True:

    if firstloop == True:
        dhtsensor.measure ()
        currentkelvin = dhtsensor.temperature () + 273.15
        lastkelvin = currentkelvin
        lasthumid = dhtsensor.humidity ()
        print (currentkelvin)
        print (dhtsensor.humidity ())

    else:
        '''if not pinetwork.isconnected():
            while not pinetwork.isconnected():
                pinetwork.connect (networkssid, networkkey)
                print ("Attempting to connect...")
                time.sleep(3000)

            print ("Connected to access point.")'''
        dhtsensor.measure ()
        currentkelvin = dhtsensor.temperature () + 273.15
        
        if (currentkelvin - lastkelvin) > MAXTEMPVARIANCE:# Print if temperature is out of range
            print ("Temperature reading outside of limits. Test sensor for incorrect readings.")

        else:
            print (currentkelvin)

        if (dhtsensor.humidity () - lasthumid) > MAXHUMIDVARIANCE:
            print ("Humidity reading outside of limits. Test sensor for icorrect readinngs.")

        else:
            print (dhtsensor.humidity ())

        '''if timeloop > DHTSAMPLETIME: # Reset the average temp value and reset the time since interval
            intervalstart = time.time ()
            tempsum = 273.15'''

    time.sleep(2)
