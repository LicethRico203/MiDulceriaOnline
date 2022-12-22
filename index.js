var app = require('./app');
var mongoose = require('./src/conexDB/conn.js');

var port = 4000;
app.listen(port, () => {
    console.log("Servidor Corriendo OK");
});