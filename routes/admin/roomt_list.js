var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/roomt_list', function(req, res, next) {
  res.render('admin/roomt_list', { title: 'Express' });
});

module.exports = router;
