const { query } = require("express");
const { default: mongoose } = require("mongoose");
const Producto = require("../models/Producto");

function prueba(req, res){
    res.status(200).send({
        message: 'Haciendo Una Prueba'
    });
}

function saveProducto(req, res){
    var myProducto = new Producto(req.body);
    myProducto.save((err, result) => {
        res.status(200).send({message:result});
    });
}

function buscarData(req, res){
    var idProducto = req.params.id;
    Producto.findById(idProducto).exec((err, result) => {
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
    var idProducto = req.params.idb;
    if(!idProducto){
        var result = Producto.find({}).sort('Nombre');
    } else{
        var result = Producto.find({Producto:idProducto}).sort('Nombre');
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

function deleteProducto(req, res){
    var idProducto = req.params.id;
    Producto.findByIdAndRemove(idProducto).exec((err, Producto) => {
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

function updateProducto(req, res){
    var id = req.params.id;
    Producto.findByIdAndUpdate({_id: id}, req.body, {new: true},
        function(err, Producto){
            if(err){
                res.send(err);
            }
            res.json(Producto);
        });
}

module.exports = {
    prueba,
    saveProducto,
    buscarData,
    listarTodo,
    deleteProducto,
    updateProducto
}