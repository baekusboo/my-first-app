const express = require('express')
const router = express.Router()
const verify = require('./verifyToken')
const User = require('../models/UserSchema')

router.post('/', verify, async (request,response) =>{

    const email = request.User.email
    const {age, dob, mobile, country} = request.body

    console.log(email)

    const updatedUser = await User.updateOne({ email }, { $set: {
        age, dob, mobile, country
    }}
    )

    console.log(updatedUser)

    return response.json({
        status: 'ok',
        data: updatedUser
    })

})

module.exports = router