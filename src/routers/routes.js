const { Router } = require('express');
var controllerCliente = require('../controllers/ControllerCliente');
var controllerProducto = require('../controllers/ControllerProducto');
const router = Router();

router.get('/prueba', controllerCliente.prueba);
router.post('/Crear', controllerCliente.saveCliente);
router.get('/buscar/:id', controllerCliente.buscarData);
router.get('/buscarAll/:idb?', controllerCliente.listarTodo);
router.delete('/delete/:id', controllerCliente.deleteCliente);
router.put('/actualizar/:id', controllerCliente.updateCliente);

router.get('/prueba', controllerProducto.prueba);
router.post('/Crear', controllerProducto.saveProducto);
router.get('/buscar/:id', controllerProducto.buscarData);
router.get('/buscarAll/:idb?', controllerProducto.listarTodo);
router.delete('/delete/:id', controllerProducto.deleteProducto);
router.put('/actualizar/:id', controllerProducto.updateProducto);

module.exports=router;
//export default router;