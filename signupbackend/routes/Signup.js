const express = require('express')
const router = express.Router()
const User1 = require('../models/UserSchema')
const bcrypt = require('bcrypt')

router.post('/', async (request,response) =>{

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const SignedUpUser = new User1({
        name:request.body.name,
        email:request.body.email,
        password:securePassword
    })
    SignedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router