const { Schema, model, SchemaType } = require('mongoose');

const RegistroSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        requiere: true
    },
    Sintomas: [],
    Enfermedades: [],
});

module.exports = model('registroUsuarios', RegistroSchema);