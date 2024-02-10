const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();


app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('views',path.join(__dirname,'views'))

const user = mongoose.model('user',{username:String, password:String, email:String});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'registration/registrationform.html'));
})
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'home.html'));
})

app.listen(8080,console.log('listening on port 8080'));