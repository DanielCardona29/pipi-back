const { lista_enfermedades } = require('./utils/lista.enfermedades.js');

class Main{
    constructor() {
        this.lista_enfermedades = lista_enfermedades;
    }


    async disease(list) {
        this.lista_enfermedades.map((index, key) => {
            index.sintomas.map((index, key) => {
                console.log(index);
            });
        });
    }
}

module.exports = Main;