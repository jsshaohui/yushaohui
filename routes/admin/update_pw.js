var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/update_pw', function(req, res, next) {
  res.render('admin/update_pw', { title: 'Express' });
});

module.exports = router;
