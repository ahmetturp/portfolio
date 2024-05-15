# Project Summary

The Internet of Things is a network of everyday objects that using built-in sensors or actuators to gather data and take action based on that data across the network. These devices are common in commercial (healthcare, transportation) and industrial production (cars, oil \& gas) areas. In this group project, we offer a consumer-related Smart House solution along with a prototype. With this solution, the house has an automated lights \& temperature management as well as an entertainment system enhancement. These modules can be controlled over the internet.

The assets used in this project are: Particle Photon, light/temperature sensors, speaker module. On the software side, we used Particle IDE to program the Particle Photon. We build a dashboard using Ajax and JSON.

We choose Ajax because it reduces bandwidth between the server and the client by allowing web pages to update partially by exchanging a small amount of data with the server. Small sized packages also reduce the response time between both nodes. The IoT devices are able to generate great amounts of small data within seconds and this might cause bandwidth problems. On the Particle, we have adjusted the sensors to refresh the information in every 2 seconds since we don't need milliseconds of accurate information. On the Dashboard, the values (lights status, temperature etc.) are refreshed only when needed; without reloading the whole webpage. Such optimizations can save bandwidth and increase user experience.

Then, all the groups in the class have presented their project on the school campus.

We thought the best places to start this trend are where we spend our time the most: our homes and offices. It is important that such technology would increase the quality of life by improving comfort, financial savings as well as time-savings. Another aim of this project is to introduce "simple" homes and offices with IoT. Our solution offers simple solutions to everyday objects to make them smart to fulfill the needs mentioned above.

## Images

**Front View of the Smart House**

![houseFront](<../projectsContent/Smart%20House%20(IoT)/images/houseFront.jpg>)

---

**Top View of the Smart House**

![houseTop](<../projectsContent/Smart%20House%20(IoT)/images/houseTop.jpg>)

1. **Light Sensor:** We used a light sensor to detect the intensity of the daylight. The sensor placed outside of the building. It used to turn on or off outdoor (5) and indoor (6) lights, depending on the daylight level.
2. **Temperature Sensor:** A temperature sensor placed in the middle of the house. We tried to keep the temperature around 23 Celsius degrees. If it is hot, the cooling fan (7) turned on and heater (8) turned off and vice versa.
3. **Speaker Module:** The speaker module has been placed "Bar" section of the house and it plays a tune when triggered.
4. **RGB LED:** Produces different colors when the tune is playing.
5. **Outdoor Lights**
6. **Indoor Lights**
7. **Cooling Fan:** Simulated by a blue led.
8. **Heater:** Simulated by a red led.

---

**Mobile Dashboard**

![mobileDashboard](<../projectsContent/Smart%20House%20(IoT)/images/mobileDashboard.jpg>)

---

**Our poster design for the smart house**

![poster](<../projectsContent/Smart%20House%20(IoT)/images/poster.jpg>)
