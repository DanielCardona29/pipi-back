const express = require('express');
//importamos el middlawere de morgan
const morgan = require('morgan');
//Iniciamos express
const app = express();
const Registro = require('./registro.controller');
//Agregar al acceso al CORS 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//usamor morgan middlawere para controlar nuestra aplicacion
app.use(morgan('dev'));

//Usamos el middlawere de express apara que entienda los datos en JSON
app.use(express.json())


//Iniciamos una clase
const _RegistrosController = new Registro();


app.post('/', _RegistrosController.consult)
module.exports = app;