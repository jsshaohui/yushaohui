var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/users', function(req, res, next) {
  res.render('admin/users', { title: 'Express' });
});

module.exports = router;
