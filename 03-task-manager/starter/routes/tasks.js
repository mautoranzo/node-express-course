const express = require('express')
const router = express.Router()
const {getAllTasks,
    CreateTask,
    getTask,
    updateTask,
    deleteTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(CreateTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router