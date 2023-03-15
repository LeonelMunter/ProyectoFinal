// console.clear();
import devUtilFunc from './server/util.dev/index.js'
import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import {connect} from './server/db/db.js'
import router from './server/routes';

dotenv.config();
devUtilFunc()
const server=express()
const port=5000

server.use(cors())
server.use(morgan('dev'))
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(router)

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


connect()

