const jwt = require('jsonwebtoken')

module.exports = function (request, response, next){
    const token = request.header('auth-token');
    if (!token){
        console.log("token no match")
        return response.status(401).send('Access Denied');
    }

    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        request.User = verified;
        //console.log("logged-in as = ",request.body.email)
        next();
    }catch(error){
        response.status(400).send('Invalid Token');
    }

}