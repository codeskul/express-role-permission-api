var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.test = "demo"
  console.log(req.session)
  res.render('index', { title: 'Express' });
});

module.exports = router;
