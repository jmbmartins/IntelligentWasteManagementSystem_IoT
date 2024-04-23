// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Create an Express application
const app = express();
const port = 3000;

// Middleware to parse JSON bodies for this app
app.use(bodyParser.json());

// Create a connection to the database
const db = mysql.createConnection({
  host: 'snf-63590.vm.okeanos-global.grnet.gr',
  user: 'root',
  password: 'LIxoIOT*2024',
  database: 'waste_db' 
});

// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the database');
});

// Routes for handling CRUD operations on 'Companie'
app.post('/api/companies', (req, res) => {
  let data = {ID_Employee: req.body.ID_Employee, email: req.body.email, password: req.body.password, role: req.body.role};
  let sql = 'INSERT INTO Companie SET ?';
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    res.send('Company added...');
  });
});

app.put('/api/companies/:id', (req, res) => {
  let sql = `UPDATE Companie SET email = '${req.body.email}', password = '${req.body.password}', role = '${req.body.role}' WHERE ID_Employee = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Company updated...');
  });
});

app.delete('/api/companies/:id', (req, res) => {
  let sql = `DELETE FROM Companie WHERE ID_Employee = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Company deleted...');
  });
});

// Routes for handling CRUD operations on 'Regions'
app.post('/api/regions', (req, res) => {
  let data = {ID_Region: req.body.ID_Region, name_region: req.body.name_region};
  let sql = 'INSERT INTO Regions SET ?';
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    res.send('Region added...');
  });
});

app.put('/api/regions/:id', (req, res) => {
  let sql = `UPDATE Regions SET name_region = '${req.body.name_region}' WHERE ID_Region = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Region updated...');
  });
});

app.delete('/api/regions/:id', (req, res) => {
  let sql = `DELETE FROM Regions WHERE ID_Region = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Region deleted...');
  });
});

// Routes for handling CRUD operations on 'Containers'
app.post('/api/containers', (req, res) => {
  let data = {ID_Container: req.body.ID_Container, region_id: req.body.region_id, latitude: req.body.latitude, longitude: req.body.longitude};
  let sql = 'INSERT INTO Containers SET ?';
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    res.send('Container added...');
  });
});

app.put('/api/containers/:id', (req, res) => {
  let sql = `UPDATE Containers SET region_id = '${req.body.region_id}', latitude = ${req.body.latitude}, longitude = ${req.body.longitude} WHERE ID_Container = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Container updated...');
  });
});

app.delete('/api/containers/:id', (req, res) => {
  let sql = `DELETE FROM Containers WHERE ID_Container = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Container deleted...');
  });
});

// Routes for handling CRUD operations on 'SensorData'
app.post('/api/sensorData', (req, res) => {
  let data = {
    ID_Record: req.body.ID_Record,
    ID_Container: req.body.ID_Container,
    s1_r: req.body.s1_r,
    s1_o: req.body.s1_o,
    s2_r: req.body.s2_r,
    s2_o: req.body.s2_o,
    s3_r: req.body.s3_r,
    s3_o: req.body.s3_o,
    timestamp: req.body.timestamp
  };
  let sql = 'INSERT INTO SensorData SET ?';
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    res.send('Sensor data added...');
  });
});

app.put('/api/sensorData/:id', (req, res) => {
  let sql = `UPDATE SensorData SET ID_Container = '${req.body.ID_Container}', s1_r = ${req.body.s1_r}, s1_o = ${req.body.s1_o}, s2_r = ${req.body.s2_r}, s2_o = ${req.body.s2_o}, s3_r = ${req.body.s3_r}, s3_o = ${req.body.s3_o}, timestamp = '${req.body.timestamp}' WHERE ID_Record = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Sensor data updated...');
  });
});

app.delete('/api/sensorData/:id', (req, res) => {
  let sql = `DELETE FROM SensorData WHERE ID_Record = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Sensor data deleted...');
  });
});

// Routes for handling CRUD operations on 'Final_Stats'
app.post('/api/finalStats', (req, res) => {
  let data = {ID_Result: req.body.ID_Result, ID_Container: req.body.ID_Container, fill_level: req.body.fill_level, timestamp: req.body.timestamp};
  let sql = 'INSERT INTO Final_Stats SET ?';
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    res.send('Final stat added...');
  });
});

app.put('/api/finalStats/:id', (req, res) => {
  let sql = `UPDATE Final_Stats SET ID_Container = '${req.body.ID_Container}', fill_level = ${req.body.fill_level}, timestamp = '${req.body.timestamp}' WHERE ID_Result = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Final stat updated...');
  });
});

app.delete('/api/finalStats/:id', (req, res) => {
  let sql = `DELETE FROM Final_Stats WHERE ID_Result = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Final stat deleted...');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});