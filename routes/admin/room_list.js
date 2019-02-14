var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/room_list', function(req, res, next) {
  res.render('admin/room_list', { title: 'Express' });
});

module.exports = router;
