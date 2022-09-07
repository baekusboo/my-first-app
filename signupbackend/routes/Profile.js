const express = require('express')
const router = express.Router()
const User2 = require('../models/UserSchema2')
const verify = require('./verifyToken')

/*
router.get('/', verify, async (request,response) =>{
    response.send(request.User);
})
*/

router.post('/', verify, async (request,response) =>{

    const updatedUser = new User2({
        age:request.body.age,
        dob:request.body.dob,
        mobile:request.body.mobile,
        country:request.body.country
    })
    updatedUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router