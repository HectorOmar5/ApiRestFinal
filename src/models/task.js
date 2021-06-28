const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ValorSchema = new Schema({

    /*temperatura: String,
    humedad: String,
    fecha: Date,
    descripcion: String*/

    temperatura: {type: Number},
    humedad: {type: Number},
    fecha: {type: Date, default: Date.now},
    descripcion: {type: String}
}); 

module.exports = mongoose.model('Datos', ValorSchema);
