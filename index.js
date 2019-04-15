'use strict'

//importations
const express = require('express')
const bodyParser = require('body-parser')

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

app.listen(port, ()=>{
console.log(`API REST corriendo en http://localhost:${port}`)
})