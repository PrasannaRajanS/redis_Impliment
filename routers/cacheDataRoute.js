const express = require('express');
const router = express.Router();
const cacheController = require('../controllers/cacheDataController');

router.post('/cache', cacheController.createCache); 
router.get('/cache', cacheController.getAllCache);
router.get('/cache/:id', cacheController.getCacheProductById);

module.exports = router;