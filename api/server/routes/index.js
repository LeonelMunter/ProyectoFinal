import express from 'express';
import houseRoutes from './house.js';


const server = express();

server.use('/houses',houseRoutes)

server.get('/', (req, res) => {
    res.send('Welcome to the Hause app!');
  });


export default server;

