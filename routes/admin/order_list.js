var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/order_list', function(req, res, next) {
  res.render('admin/order_list', { title: 'Express' });
});

module.exports = router;
