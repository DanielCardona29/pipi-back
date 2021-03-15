const Main = require('./main.controller.js');
const lista_enfermedades = require('./utils/lista.enfermedades.js');
const registroUsuarios = require('./model/registro.modeel.js');

class Registro {
    constructor() {
        this.lista_enfermedades = lista_enfermedades;
    }

    //Pedir la consulta 
    async consult(req, res, next) {

        try {

            const { name, lastName, sintomas } = req.body;

            console.log(req.body);
            let enfermedades = []
            //Primero conocemos la enfermedad
            lista_enfermedades.map((index, key) => {
                for (let i = 0; i < index.sintomas.length; i++) {
                    for (let j = 0; j < sintomas.length; j++) {
                        if (index.sintomas[i] === sintomas[j]) {
                            if (enfermedades.indexOf(index.name) === -1) {
                                enfermedades = [
                                    ...enfermedades,
                                    index.name
                                ];
                            }
                        };
                    };
                };
            });
            //Ahora conocemos los sintomas y los tratamientos
            let tratamiento = [];

            lista_enfermedades.map((index, key) => {
                enfermedades.forEach(enfermedad => {
                    if (index.name === enfermedad) {
                        tratamiento = [
                            ...tratamiento,
                            {
                                enfermedad: index.name,
                                sintomas: index.sintomas,
                                tratamiento: index.tratamiento
                            }
                        ]
                    }
                });
            });

            const New_Registro = new registroUsuarios({
                name,
                lastName,
                Sintomas: sintomas,
                Enfermedades: tratamiento
            })

            const savedR = await New_Registro.save();

            console.log(savedR);
            res.json({ value: true, response: tratamiento })


        } catch (error) {
            console.error(error);
            res.status(400).send(error)
        }
    }
}


module.exports = Registro;