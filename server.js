
const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

itemRoutes = require('./expressRoutes/itemRoutes');

app.use('/items', itemRoutes);
const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
});
