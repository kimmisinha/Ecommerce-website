const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.post('/users', userController.createUser);

module.exports = router;
