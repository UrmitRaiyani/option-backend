const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const passportJWT = require('./auth/auth');
const session = require('express-session');
const app = express();
require('dotenv').config();
const port = 8000;
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.set('strictQuery', false);
const dbUrl = process.env.MONGODB_URI;

mongoose.connect(dbUrl).then(() => {
  console.log('Database connected');
}).catch((err) => {
  console.log(err);
});

app.use(session({
  secret: process.env.SESSION_SECRET, 
  resave: false,
  saveUninitialized: true,
}))

app.use(passport.initialize());
app.use(passport.session());
app.use('/', require('./router/router'))
app.listen(port, (err) => {
    if(err)
    {
        console.log(err);
    }
    console.log(`Server is running on port ${port}`);
});


