const router = require('express').Router()
const productController = require('../controllers/produtos')
const clientsController = require('../controllers/clientes')

// rota de produtos
router.get('/produtos/:id?', productController.get)
router.post('/produtos', productController.post)
router.put('/produtos/:id', productController.put)
router.delete('/produtos/:id', productController.remove)

// rota de clientes
router.get('/clientes/:id?', clientsController.get)
router.post('/clientes', clientsController.post)
router.put('/clientes/:id', clientsController.put)
router.delete('/clientes/:id', clientsController.remove)


module.exports = router
