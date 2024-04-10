# Project Overview: Intelligent Waste Management System 


Problem: Inefficient waste management leads to environmental pollution, public health risks, and high operational costs due to traditional collection methods.


Proposed Solution: Development of an Intelligent Waste Management System that utilizes IoT (Internet of Things) technology to monitor and optimize waste collection in real-time. The system will be powered by solar energy, making it sustainable and reducing operational costs. Additionally, GPS technology will be incorporated to track the location of each waste bin.

### Key Components:

1. Ultrasonic Sensors: Installed in waste bins to measure the fill level. These sensors are also used to create a 3D representation of the waste inside the bin, providing a more accurate measure of the fill level.
2. Servo Motors: Employed to enable the sweeping motion of the ultrasonic sensors for scanning the waste inside the bin. The servo motors help in obtaining 3D coordinates from different angles for mapping purposes.
3. Microcontroller (Arduino): Responsible for collecting and processing sensor data. It interfaces with the ultrasonic sensors and servo motors, and transfers the collected data to the cloud server.
4. PC/Laptop: After the microcontroller sends the ultrasonic sensor values to the Firestore cloud, the PC retrieves this data and processes it. This involves creating 3D coordinates from the sensor values, transforming these coordinates to a 2D representation, and then calculating the fill level percentage. The calculated fill level is then registered in Firestore cloud to be used by the mobile and web applications.
5.  GPS Module: Installed in each waste bin to track its location.
6.  Connectivity: Use of Wi-Fi to transmit data to a cloud server.
7.  Cloud Server: Firebase is used to store and analyze sensor data.
8.  Solar Panels: Installed on or near the waste bins to capture solar energy. 
9.  Charge Controller: Regulates the voltage and current coming from the solar panels.
10.  Battery Storage: Stores the energy generated by the solar panels for use when there's no sunlight.
11.  DC-DC Converter: Converts the battery voltage to the required voltage for the sensors, microcontroller, and GPS module.
12. Matrix LED 8x8: Installed in each waste bin to display the fill level.
13. Mobile Application (Flutter) for Residents: Allows residents to locate nearby waste bins, view their fill level, and choose where to dispose of their waste based on occupancy. It also provides intelligent assistance by suggesting the best disposal option based on the user's location and the fill levels of nearby bins.
14. Web Dashboard for Waste Management Companies: Provides an overview of all waste bins under the company's responsibility, with detailed information on fill level, location, and collection efficiency reports. The company can manage the waste bins by adding, editing, or deleting bins.

#### Operation:

1.  Solar panels capture solar energy, which is regulated by the charge controller and stored in batteries.
2.  The DC-DC converter provides the required power to the ultrasonic sensors, microcontroller, GPS module, and Matrix LED 8x8.
3.  Ultrasonic sensors installed in waste bins measure the fill level and create a 3D representation of the waste inside the bin. They collect data in cylindrical coordinates, which are then sent to the Firestore cloud by the microcontroller.
4.  Servo motors enable the sweeping motion of the ultrasonic sensors, exploring the waste within a 180° range and incrementing position by 15º each time.
5.  The microcontroller collects the data from the ultrasonic sensors and transfers it to the Firestore cloud.
6.  The PC retrieves the sensor data from the Firestore cloud, processes the real-world 3D coordinates, and converts the scatter plot into a surface contour map of the scanned 3D environment inside the bin. It then calculates the fill level percentage and registers this value back in the Firestore cloud.
7.  The Matrix LED 8x8 displays the fill level in different colors: Green for "Low", Yellow for "Moderate", and Red for "High".
8.  The mobile application enables residents to access real-time information and make informed waste disposal decisions based on the fill level data stored in the Firestore cloud.
9.  Waste management companies use the web dashboard to monitor and optimize collection operations based on real-time sensor data and location information from the Firestore cloud.

#### Challenges:

1.  Ensuring the solar panels receive adequate sunlight and are properly maintained.
2.  Ensuring the accuracy and reliability of the 3D surface mapping technique using ultrasonic sensors and servo motors.
3.  Managing the battery storage to ensure there's enough power during periods of no sunlight.
4.  Ensuring the accuracy and reliability of ultrasonic sensors and GPS module.
5.  Developing intuitive user interfaces for the mobile application and web dashboard.
6.  Integrating the new system with existing waste management systems.
7.  Maintaining connectivity and performing adequate system maintenance over time.

#### Expected Benefits:

1.  Reduction in operational costs as the system uses a renewable energy source.
2.  More accurate measurement of the fill level of waste bins, leading to more efficient waste collection operations.
3.  Reduction in environmental pollution and public health risks.
4.  Optimization of waste collection operations, leading to cost savings.
5.  Active community participation in waste management.
6.  Improved transparency and efficiency in urban waste management.
7.  Enhanced tracking and location accuracy of waste bins.
8.  Real-time visual indication of fill levels for residents and waste management personnel.
----------------------------------------------------------------------------------------------

### Garanting Reability and Accuracy of Ultrasonic Sensors

#### Reviewing Article "3D Surface Mapping using Ultrasonic Sensors"

Material Used:
 - Ultrasonic Sensors
 - Microcontroller (e.g., Arduino)
 - Servo Motors: Employ servo motors to enable the sweeping motion of the ultrasonic sensors for scanning the environment. The servo motors will help in obtaining 3D coordinates from different angles for mapping    purposes.
 - PC/Laptop: Utilize a computer to receive and process the data collected by the ultrasonic sensors. Use software like Processing and Matlab for data analysis, conversion of coordinates, and        visualization of the 3D surface contour map.

Technologies Used:
  - Arduino IDE for microcontroller programming
  - Processing/Matlab for data processing and visualization.
  - Develop algorithms for data conversion and surface contour mapping.

Metodology:

1.  **Experimental Setup**: Three ultrasonic sensors mounted vertically on a stand with equal spacing, connected to a servo motor that can sweep an angle from 0° to 180°, interfaced with an Arduino Uno R3 board.

2.  **Data Collection**: Ultrasonic sensors collect data in cylindrical coordinates, ‘r’ (in cm), Φ(in degrees) - angle swept by the servo motor, ‘z’ is the height of each ultrasonic sensor measured from the bottom of the stand, exploring the environment within a 180° range, incrementing pos by 15º each, transferred to a PC through the Arduino serial port.

4.  **Data Processing**: Real-world 3D coordinates are processed using Processing and Matlab, converting cylindrical coordinates to rectangular form for plotting a 3D scatter plot of the environment.

5.  **Surface Contour Mapping**: A reconstruction process converts the scatter plot into a surface contour map of the scanned 3D environment, enabling visualization of planar surfaces.


-----------------------------------------------------------------------------------------------
#### Database Design



---------------------------------------------------------


#### Flow of Mobile Application

1.  Region Selection:
    -   When the user opens the application for the first time, prompt the user to choose their current region from a list of available regions.
2.  Main Page:

    -   Upon selecting the region, the main page should display a list of containers in the chosen region.
    -   Each container entry in the list should include:
        -   The fill level percentage.
        -   The distance between the container location and the user's current location.
    -   Include a lamp icon on the main page to suggest the best disposal option based on the user's location and the fill levels of nearby bins.
    -   Provide a way for the user to easily navigate back to the main page from other sections of the application.
3.  Change Region Option:

    -   In the main menu, include an icon or option to change the region to another one.
    -   When selected, prompt the user to choose a different region from the available list.
4.  Remember Last Region:

    -   Implement functionality to remember the last selected region.
    -   When the user closes the app and opens it again, automatically navigate the user to the last selected region.


