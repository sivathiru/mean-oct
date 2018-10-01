var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/book.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express RESTful API');
});

module.exports = router;