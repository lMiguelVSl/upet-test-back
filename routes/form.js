const express = require('express');
const formController = require('../controllers/form');
const router = express.Router();

router.get('/getUser/:id', formController.getUser);
router.post('/postUser', formController.postUser);

module.exports = router;