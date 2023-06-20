const mongoose = require('mongoose');
const User = require('./schemas/User');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());

mongoose.connect("mongodb://mongoDB:27017/vacation-db", { useNewUrlParser: true, useUnifiedTopology: true });

// Event handlers for connection status
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });

app.listen(3000);