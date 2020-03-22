const express = require('express');
const router = express.Router();

const review = require('./review');

router.use('/review', review);

module.exports = router;
