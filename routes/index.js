const express = require('express');
const router = express.Router();
const Certification = require('../core/userCertification');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
