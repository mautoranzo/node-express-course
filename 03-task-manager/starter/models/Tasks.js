const mongoose = require('mongoose')

TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'must provide a name'],
        //Este trim quita los espacios en blanco en el nombre
        trim:true,
        maxlength:[20,'name can not be more than 20 characters'],
        minlength:[2,'name can not be less than 2 characters']
    }, 
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task',TaskSchema)