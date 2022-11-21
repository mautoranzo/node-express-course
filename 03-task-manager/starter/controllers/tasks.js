const Task = require('../models/Tasks')

const getAllTasks = (req,res) =>{
    
    res.send('Todos los Items')
}

const createTask = async (req,res) =>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getTask = (req,res) =>{
    res.json({id:req.params.id})
}

const updateTask = (req,res) =>{
    res.send('Modificar Item')
}

const deleteTask = (req,res) =>{
    res.send('Eliminar Item')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}