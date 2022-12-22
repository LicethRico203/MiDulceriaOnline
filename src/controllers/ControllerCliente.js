const { query } = require("express");
const { default: mongoose } = require("mongoose");
const Cliente = require("../models/Cliente");

function prueba(req, res){
    res.status(200).send({
        message: 'Haciendo Una Prueba'
    });
}

function saveCliente(req, res){
    var myCliente = new Cliente(req.body);
    myCliente.save((err, result) => {
        res.status(200).send({message:result});
    });
}

function buscarData(req, res){
    var idCliente = req.params.id;
    Cliente.findById(idCliente).exec((err, result) => {
        if(err){
            res.status(500).send({message: 'Error Al Momento De Ejecutar La Consulta'});
        } else{
            if(!result){
                res.status(404).send({message: 'El registro No Se Encuentra'});
            } else{
                res.status(200).send({result});
            }
        }
    });
}

function listarTodo(req, res){
    var idCliente = req.params.idb;
    if(!idCliente){
        var result = Cliente.find({}).sort('Nombre');
    } else{
        var result = Cliente.find({cliente:idCliente}).sort('Nombre');
    }

    result.exec(function(err, result){
        if(err){
            res.status(500).send({message: 'Error Al Momento De Ejecutar La Consulta'});
        } else{
            if(!result){
                res.status(404).send({message: 'El registro No Se Encuentra'});
            } else{
                res.status(200).send({result});
            }
        }
    });
    
}

function deleteCliente(req, res){
    var idCliente = req.params.id;
    Cliente.findByIdAndRemove(idCliente).exec((err, cliente) => {
        if(err){
            res.status(500).send({message: 'Error Al Momento De Ejecutar La Consulta'});
        } else{
            if(!result){
                res.status(404).send({message: 'El registro No Se Encuentra'});
            } else{
                res.status(200).send({result});
            }
        }
    });
}

function updateCliente(req, res){
    var id = req.params.id;
    Cliente.findByIdAndUpdate({_id: id}, req.body, {new: true},
        function(err, Cliente){
            if(err){
                res.send(err);
            }
            res.json(Cliente);
        });
}

module.exports = {
    prueba,
    saveCliente,
    buscarData,
    listarTodo,
    deleteCliente,
    updateCliente
}