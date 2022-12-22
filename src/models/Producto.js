var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = Schema({
    producto: String,
    id_producto: String,
    inventario: Integer,
    precio: Integer,
});
const Producto = mongoose.model('Producto', ProductoSchema);

module.exports = Producto;