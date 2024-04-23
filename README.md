# Project Overview: Intelligent Waste Management System 


Problem: Inefficient waste management leads to environmental pollution, public health risks, and high operational costs due to traditional collection methods.


Proposed Solution: Development of an Intelligent Waste Management System that utilizes IoT (Internet of Things) technology to monitor and optimize waste collection in real-time. The system will be powered by solar energy, making it sustainable and reducing operational costs. Additionally, GPS technology will be incorporated to track the location of each waste bin.

### Key Components:

1.  **Ultrasonic Sensors**: Installed in waste bins to measure the fill level. These sensors are also used to create a 3D representation of the waste inside the bin, providing a more accurate measure of the fill level.
2.  **Servo Motors**: Employed to enable the sweeping motion of the ultrasonic sensors for scanning the waste inside the bin. The servo motors help in obtaining 3D coordinates from different angles for mapping purposes.
3.  **Microcontroller (Arduino)**: Responsible for collecting and processing sensor data. It interfaces with the ultrasonic sensors and servo motors, and transfers the collected data to the server hosted on the virtual machine.
4.  **Virtual Machine (Ubuntu Desktop on Okeanos)**: This machine hosts the web server and the database. It retrieves the sensor data sent by the microcontroller, processes it (transforms the 3D coordinates to a 2D representation, calculates the fill level percentage), and stores the processed data in the SQL database.
5.  **GPS Module**: Installed in each waste bin to track its location.
6.  **Connectivity**: Use of Wi-Fi to transmit data to the server on the virtual machine.
7.  **Web Server (Apache2)**: Hosts the web application and serves it to users.
8.  **Database (SQL/PhpMyAdmin)**: Stores and manages sensor data, user data, and other relevant information.
9.  **Solar Panels**: Installed on or near the waste bins to capture solar energy.
10. **Charge Controller**: Regulates the voltage and current coming from the solar panels.
11. **Battery Storage**: Stores the energy generated by the solar panels for use when there's no sunlight.
12. **DC-DC Converter**: Converts the battery voltage to the required voltage for the sensors, microcontroller, and GPS module.
13. **Matrix LED 8x8**: Installed in each waste bin to display the fill level.
14. **Mobile Application (Flutter) for Residents**: Allows residents to locate nearby waste bins, view their fill level, and choose where to dispose of their waste based on occupancy. It also provides intelligent assistance by suggesting the best disposal option based on the user's location and the fill levels of nearby bins.
15. **Web Dashboard for Waste Management Companies**: Provides an overview of all waste bins under the company's responsibility, with detailed information on fill level, location, and collection efficiency reports. The company can manage the waste bins by adding, editing, or deleting bins. This dashboard is hosted on the Apache2 web server on the Okeanos virtual machine.


#### Operation:

1.  Solar panels capture solar energy, which is regulated by the charge controller and stored in batteries.
2.  The DC-DC converter provides the required power to the ultrasonic sensors, microcontroller, GPS module, and Matrix LED 8x8.
3.  Ultrasonic sensors installed in waste bins measure the fill level and create a 3D representation of the waste inside the bin. They collect data in cylindrical coordinates, which are then sent to the Node.js server hosted on the virtual machine by the microcontroller via a REST API.
4.  Servo motors enable the sweeping motion of the ultrasonic sensors, exploring the waste within a 180° range and incrementing position by 15º each time.
5.  The microcontroller collects the data from the ultrasonic sensors and transfers it to the Node.js server on the virtual machine via a REST API.
6.  The Node.js server receives the sensor data, triggers a data processing script on the virtual machine which processes the real-world 3D coordinates, converts the scatter plot into a surface contour map of the scanned 3D environment inside the bin, calculates the fill level percentage, and registers this value in the SQL database.
7.  The Matrix LED 8x8 displays the fill level in different colors: Green for "Low", Yellow for "Moderate", and Red for "High".
8.  The mobile application enables residents to access real-time information and make informed waste disposal decisions based on the fill level data stored in the SQL database. It communicates with the Node.js server via a REST API to retrieve this data.
9.  Waste management companies use the web dashboard to monitor and optimize collection operations based on real-time sensor data and location information from the SQL database. The web dashboard communicates with the Node.js server via a REST API to retrieve, update, and delete this data.

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

##### No SQL
-   `companies` collection:
    -   Document ID: Auto-generated or use `ID_Employee` (String)
    -   Fields: `email` (String), `password` (String), `role` (String)
-   `regions` collection:
    -   Document ID: Auto-generated or use `ID_Region` (String)
    -   Fields: `name_region` (String)
-   `containers` collection:
    -   Document ID: Auto-generated or use `ID_Container` (String)
    -   Fields: `region_id` (String), `latitude` (Float), `longitude` (Float)
    -   Sub-collection: `sensor_data`
        -   Document ID: Auto-generated or use `ID_Record` (String)
        -   Fields: `s1_r` (Float), `s1_o` (Float), `s2_r` (Float), `s2_o` (Float), `s3_r` (Float), `s3_o` (Float), `timestamp` (Timestamp)
    -   Sub-collection: `results_from_pc`
        -   Document ID: Auto-generated or use `ID_Result` (String)
        -   Fields: `fill_level` (Float), `timestamp` (Timestamp)

#### SQL

1. **Companie**
    - `ID_Employee` (varchar(255), PRIMARY KEY)
    - `email` (varchar(255))
    - `password` (varchar(255))
    - `role` (varchar(255))

2. **Regions**
    - `ID_Region` (varchar(255), PRIMARY KEY)
    - `name_region` (varchar(255))

3. **Containers**
    - `ID_Container` (varchar(255), PRIMARY KEY)
    - `region_id` (varchar(255), FOREIGN KEY REFERENCES `Regions` (`ID_Region`))
    - `latitude` (float)
    - `longitude` (float)

4. **SensorData**
    - `ID_Record` (varchar(255), PRIMARY KEY)
    - `ID_Container` (varchar(255), FOREIGN KEY REFERENCES `Containers` (`ID_Container`))
    - `s1_r` (float)
    - `s1_o` (float)
    - `s2_r` (float)
    - `s2_o` (float)
    - `s3_r` (float)
    - `s3_o` (float)
    - `timestamp` (timestamp)

5. **Final_Stats**
    - `ID_Result` (varchar(255), PRIMARY KEY)
    - `ID_Container` (varchar(255), FOREIGN KEY REFERENCES `Containers` (`ID_Container`))
    - `fill_level` (float)
    - `timestamp` (timestamp)


---------------------------------------------------------


#### Flow of Mobile Application


1. **Region Selection**:
    - When the user opens the application for the first time, prompt the user to choose their current region from a list of available regions.

2. **Main Page**:
    - Upon selecting the region, the main page should display a list of containers in the chosen region.
    - Each container entry in the list should include:
        - The fill level percentage.
        - The distance between the container location and the user's current location.
    - Include a lamp icon on the main page to suggest the best disposal option based on the user's location and the fill levels of nearby bins.

3. **Change Region Option**:
    - In the main menu, include an icon or option to change the region to another one.
    - When selected, prompt the user to choose a different region from the available list.

4. **Remember Last Region**:
    - Implement functionality to remember the last selected region by saving it in the shared preferences (local storage on the device).
    - When the user closes the app and opens it again, automatically navigate the user to the last selected region, retrieved from the shared preferences.
