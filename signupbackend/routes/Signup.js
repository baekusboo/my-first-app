const express = require('express')
const router = express.Router()
const User = require('../models/UserSchema')
const bcrypt = require('bcrypt')

router.post('/', async (request,response) =>{

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const SignedUpUser = new User({
        name:request.body.name,
        email:request.body.email,
        password:securePassword
    })
    
    await SignedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router