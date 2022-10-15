const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bp = require('body-parser')

const loginRoute = require('./routes/Login')
const signupRoute = require('./routes/Signup')
const profileRoute = require('./routes/Profile')

const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Connected."))

app.use(express.json())
app.use(cors())
app.use(bp.json())

app.use('/app/login', loginRoute);
app.use('/app/signup', signupRoute);
app.use('/app/profile', profileRoute);

app.listen(4000, ()=> console.log("Server is up and running."))