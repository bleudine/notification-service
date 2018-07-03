const app = require('express')();
const express = require('express'); // Get the module
const bodyParser = require('body-parser');
const http = require('http').Server(app);
require('dotenv').config();
const notify = require('./routes/notify');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/notify', notify);

http.listen(3030, function(){
    console.log('listening on *:3030');
});