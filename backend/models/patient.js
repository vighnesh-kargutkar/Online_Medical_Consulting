const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PaientSchema = new Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    age:{
        type: Number,
        required:true
    },
    DOB:{
        type:Date,
        require: true,
    },
    gender:{
        type:String,
        enum: ['Male','Female','other'],
        require:true
    }
})
const Patient = mongoose.model('Patient',PaientSchema)

module.exports = Patient