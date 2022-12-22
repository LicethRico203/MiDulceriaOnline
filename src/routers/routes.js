const { Router } = require('express');
var controllerCliente = require('../controllers/ControllerCliente');
const router = Router();

router.get('/prueba', controllerCliente.prueba);
router.post('/Crear', controllerCliente.saveCliente);
router.get('/buscar/:id', controllerCliente.buscarData);
router.get('/buscarAll/:idb?', controllerCliente.listarTodo);
router.delete('/delete/:id', controllerCliente.deleteCliente);
router.put('/actualizar/:id', controllerCliente.updateCliente);

module.exports=router;
//export default router;