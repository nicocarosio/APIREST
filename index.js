'use strict'

//importations
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//variables
const app = express()
const port = process.env.PORT || 3000

//middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/api/product', (req, res)=>{
res.send(200, {products:[] })
})

app.get('/api/product/:productId', (req, res)=>{

})

app.post('/api/product', (req, res)=>{
    console.log(req.body)
    res.status(404).send({message: 'El producto no existe....se ha recibido correctamente'})
    
})

 app.put('/api/product/:productId', (req, res)=>{

 })

 app.delete('/api/product/:productId', (req, res)=>{

 })

 mongoose.connect('mongodb://localhost:27017/shop', { useNewUrlParser: true }, (err,res)=>{
     if(err) {
         return console.log(`Error al conectarse a la base de datos: ${err}`)
     }
     console.log('Conexión a la base de datos establecida...')
     
     app.listen(port, ()=>{
        console.log(`API REST corriendo en http://localhost:${port}`)
        })     

 })

