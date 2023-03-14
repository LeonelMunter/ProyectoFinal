import express from 'express'
const server=express()
import {connect} from './server/db/db.js'

var port=5000

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


connect()
