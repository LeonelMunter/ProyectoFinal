import express from 'express';
import houseRoutes from './house.js';
import materialRoutes from './material.js';
import employeeRoutes from './employee.js';


const server = express();

server.use('/houses',houseRoutes)
server.use('/materials',materialRoutes)
server.use('/employee',employeeRoutes)

server.get('/', (req, res) => {
    res.send('Welcome to the Hause app!');
  });


export default server;

