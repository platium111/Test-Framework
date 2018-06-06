// https://codeburst.io/revisiting-node-js-testing-part-1-84c33bb4d711

// const sum = require('./sum');
// console.log(sum(1, 2).toString());

const express = require('express');
const hello = require('./hello');
const handleListen = require('./handleListen');

const PORT = 3000;
const app = express();
app.get('/', hello);
app.listen(PORT, handleListen(console.log, PORT));