require('dotenv').config()
const express = require('express')
const session = require('express-session')
const authCtrl = require('./controller/authCtrl')
const movieCtrl = require('./controller/movieCtrl')

const {SERVER_PORT,SESSION_SECRET} = process.env

const app = express()
app.use(express.json())

app.use(session({
    secret:SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1232134
    }
}))

//ENDPOINTS
app.post('/api/login',authCtrl.login)
app.post('/api/logout',authCtrl.logout)
app.get('/api/getMovies',movieCtrl.getMovies)
// app.get('/api/current',authCtrl.current)

app.listen(SERVER_PORT,()=>console.log(`${SERVER_PORT} is serving your app`))