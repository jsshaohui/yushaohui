var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/order_count', function(req, res, next) {
  res.render('admin/order_count', { title: 'Express' });
});

module.exports = router;
