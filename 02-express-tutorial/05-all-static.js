const express = require('express')

const app = express()

app.use(express.static('./public'))


app.all('*',(req,res)=>{
    res.status(404).send('Resource Not Found')
})

app.listen(5000, ()=>{
    console.log('El servidor esta escuchando en el puerto 5000....');
})