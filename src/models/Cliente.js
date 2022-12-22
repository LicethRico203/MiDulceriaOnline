var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
    nombre: String,
    correo: String,
    contraseña: String,
    ciudad: String,
    direccion: String
});
const Cliente = mongoose.model('Clientes', ClienteSchema);

module.exports = Cliente;