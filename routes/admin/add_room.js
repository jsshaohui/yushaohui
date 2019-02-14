var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add_room', function(req, res, next) {
  res.render('admin/add_room', { title: 'Express' });
});

module.exports = router;
