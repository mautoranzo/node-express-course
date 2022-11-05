const express = require('express')
const app = express()

app.use(express.static('./new-public'))

app.get('/sample',(req,res)=>{
    res.status(200).send('<h1>This is working!</h1>')
})

app.all('*',(req,res)=>{
    res.status(404).send('Resource Not Found')
})

app.listen(3000)