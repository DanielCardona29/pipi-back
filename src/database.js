const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const CONNECTION_STRING = process.env.CONNECTION_STRING;
const connection = mongoose.connect('mongodb://localhost/pipi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // para solucionar el error de "DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead."
    //Iniciamos el UseCreateIndex En verdadero
    useCreateIndex: true,
    //Para solucionar el error del findAndModify() function se setea el estado de esas funciones en falso
    useFindAndModify: false
})
    .then(value => {
        console.log('Base de datos conectada correactamente');
    })
    .catch(err => {
        console.error(`Error al conectar la base de datos: ${err}`);
    });


module.exports = connection;