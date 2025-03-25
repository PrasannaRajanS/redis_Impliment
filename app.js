const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routers/cacheDataRoute')
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api',router)

mongoose.set('strictQuery', false);

module.exports = app;