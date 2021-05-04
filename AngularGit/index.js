const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var messageController = require('./controllers/messageController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));


var PORTNODE = 3000


app.listen(PORTNODE, () => console.log('Server started at port : 3000'));

app.use('/employees', messageController);


