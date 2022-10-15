//const { isDate } = require('date-fns')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
        //unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: new Date
    },
    age:{
        type: Number,
        default: 18
        //required: true
    },
    dob:{
        type: Date,
        default: new Date
        //required: true
    },
    mobile:{
        type: Number,
        //required: true,
        //unique: true,
        default: 1000000000
    },
    country:{
        type: String,
        //required: true
        default: ''
    }
})

const model = mongoose.model('mytable', UserSchema, 'UserInfo')
module.exports = model