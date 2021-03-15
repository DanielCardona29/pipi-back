"use strict"
const app = require('./app.js');
const connection = require('./database');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 4000;
app.listen(PORT);
console.log('Servidor abierto en el puerto', PORT);