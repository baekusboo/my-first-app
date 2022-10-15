const express = require('express')
const router = express.Router()
const User1 = require('../models/UserSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/', async (request,response) =>{
    const {email, password} = request.body
    const User = await User1.findOne({email}).lean()

    if(!User) {
        return response.json({
            status: 'error',
            error: 'Invalid email/password.'
        })
    }

    if (await bcrypt.compare(password, User.password)){
        //email password combination successful
        const token = jwt.sign({
            _id: User._id,
            email: User.email
        }, process.env.JWT_SECRET,{expiresIn: '10m'})

        return response.header('auth-token',token).json({
            status: 'ok',
            data: token,
            header: 'auth-token'
        });
    }

    response.json({
        status: 'error',
        error: 'Invalid email/password.'
    })
    
})

module.exports = router