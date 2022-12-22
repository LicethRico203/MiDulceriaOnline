var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
//Configuramos cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, origin X-Requested-with, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Rutas
app.use(require('./src/routers/routes.js'));
//app.use(require('./src/routers/routes.js'));

module.exports = app;
