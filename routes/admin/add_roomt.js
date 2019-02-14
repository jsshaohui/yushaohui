var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add_roomt', function(req, res, next) {
  res.render('admin/add_roomt', { title: 'Express' });
});

module.exports = router;
