const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

//Middleware
app.use(express.json())

//ROutes
app.get('/hi',(req,res)=>{
    res.send('Task Manager')
})

app.use('/api/v1/tasks',tasks)

const port = 3000

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`ecuchando en puerto ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()