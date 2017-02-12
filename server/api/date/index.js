'use strict';

let express = require('express');
let controller = require('./date.controller.js');
let router = express.Router();

router.get('/', controller.getAllDates);
router.get('/load', controller.load);
router.delete('/', controller.clean);

module.exports = router;
