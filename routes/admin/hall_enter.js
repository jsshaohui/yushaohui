var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hall_enter', function(req, res, next) {
  res.render('admin/hall_enter', { title: 'Express' });
});

module.exports = router;
