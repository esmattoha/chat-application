// Import External Dependencies
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
console.log(process.env.MONGODB_CONNECT_URL);

// DateBase Connection
mongoose.connect(process.env.MONGODB_CONNECT_URL,{
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true
})
.then(()=>{
    console.log(`DateBase Connection Successfull.`);
})
.catch(err =>{
    console.log(err);
});

// Request Parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Set view engine
app.set('view engine' , 'ejs');

// Set Static folder
app.use(express.static(path.join(__dirname + "public")));

// parser cookies
app.use(cookieParser(process.env.COOKIES_SECRECT_KEY));

// module exporting
module.exports = {app} ;