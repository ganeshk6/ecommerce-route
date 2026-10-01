const express = require('express');
const productController = require('../controller/productController')
const router = express.Router();

router.get('/', productController.getProducts)

router.post('/', productController.addProducts)

router.get('/products/:id', productController.getProduct)

module.exports = router