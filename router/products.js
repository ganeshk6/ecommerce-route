const express = require('express');
const productController = require('../controller/productController')
const router = express.Router();

router.get('/', productController.getAllProducts)
router.post('/', productController.addProduct)
router.get('/products/:id', productController.getProductById)

module.exports = router