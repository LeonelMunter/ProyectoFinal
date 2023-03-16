import express from 'express';
import houseRoutes from './house.js';
import materialRoutes from './material.js';
import employeeRoutes from './employee.js';
import projectRoutes from './project.js';
import buyRoutes from './buy.js';
import clientRoutes from './client.js';


const server = express();

server.use('/houses',houseRoutes)
server.use('/clients',clientRoutes)
server.use('/materials',materialRoutes)
server.use('/employee',employeeRoutes)
server.use('/project',projectRoutes)
server.use('/buy',buyRoutes)

server.get('/', (req, res) => {
    res.send('Welcome to the Hause app!');
  });


export default server;

