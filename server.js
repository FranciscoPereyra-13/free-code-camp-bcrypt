'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();

fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';



//START_ASYNC -do not remove notes, place code between correct pair of notes.
var bcrypt = require('bcrypt');

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  console.log("ASYNC HASH:", hash);
});

//END_ASYNC

//START_SYNC
var bcrypt = require('bcrypt');

var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log("SYNC HASH:", hash);

//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
