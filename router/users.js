const express = require('express');
const userController = require('../controller/userController')
const router = express.Router();

router.get('/', userController.getAllUsers)
router.post('/', userController.addUser)
router.get('/:id', userController.getUserById)

module.exports = router