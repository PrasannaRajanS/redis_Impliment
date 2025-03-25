const mongoose = require('mongoose');

const cacheDataSchema = new mongoose.Schema({
    
}, { strict: false });

const cacheData = mongoose.model('cacheData', cacheDataSchema);

module.exports = cacheData;
