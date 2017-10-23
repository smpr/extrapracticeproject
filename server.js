require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const UsersController = require('./controllers/UsersController')

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}); 
app.use(express.static(__dirname + '/client/build/'));
app.use(bodyParser.json());
app.use('/api/users', UsersController)
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Its all good man... on port:  " + PORT);
})