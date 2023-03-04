const router = require('express').Router()
const productController = require('../controllers/produtos')

router.get('/produtos/:id?', productController.get)
router.post('/produtos', productController.post)
router.put('/produtos/:id', productController.put)
router.delete('/produtos/:id', productController.remove)

module.exports = router
