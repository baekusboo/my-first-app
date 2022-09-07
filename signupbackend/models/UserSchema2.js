const mongoose = require('mongoose')

const UserSchema2 = new mongoose.Schema({
    age:{
        type: Number,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    mobile:{
        type: Number,
        required: true,
        unique: true
    },
    country:{
        type: String,
        required: true
    }
})

const user_info = mongoose.model('userInfo', UserSchema2)
module.exports = user_info
