'use strict';

//importaciones
const express = require('express')
const bodyParser = require('body-parser')

//variables
const app = express()
const port = process.env.PORT || 3002

//middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//crear un servidor
app.listen(3000, ()=>{
console.log(`API REST corriendo en http://localhost:${port}`)
})