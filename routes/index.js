var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layouts/default', { title: 'Express' });
});


router.get('/login', function (req, res, next) {
  res.render('layouts/login');
});
module.exports = router;
