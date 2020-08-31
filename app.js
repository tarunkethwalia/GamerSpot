const express = require('express');
const app = express();
const cors= require('cors');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');

//Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.use('/api/user', userRoute);

app.get("/",(req,res)=>{
    res.status(200).sendFile('./index.html', {root: __dirname});
});
app.use((req,res)=>{
    res.status(404).send("404 Error");
});

module.exports = app;