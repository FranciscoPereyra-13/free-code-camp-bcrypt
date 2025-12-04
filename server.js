'use strict';

console.log("🔥 ESTE ES MI REPO REAL (infosec-free-code-camp-app) 🔥");

const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();

const bcrypt = require('bcrypt');

fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


app.get('/', (req, res) => {
  res.send('OK');
});


//START_ASYNC -do not remove notes, place code between correct pair of notes.



//END_ASYNC

//START_SYNC



//END_SYNC































const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});