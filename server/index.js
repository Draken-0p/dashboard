const express = require('express');
const {  datas } = require('./data');

const app = express();



app.get('/api',(req,res) =>{
    res.send(datas)
})

app.listen(5000 , console.log("running"))

