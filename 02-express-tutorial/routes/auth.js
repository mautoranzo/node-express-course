const express = require('express')
const router = express.Router()

router.post('/',(req,res) =>{
    const {name} =req.body
    if(name){
        return res.status(200).send(`Bienvenido ${name}` )
    }
    res.status(401).send('Please provide a credential')
})

module.exports = router