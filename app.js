const express = require('express');
const app = express();
const cors= require('cors');
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Connection Established");
});
app.use((req,res)=>{
    res.send("404 Error");
});
module.exports = app;