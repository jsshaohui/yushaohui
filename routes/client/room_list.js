var router = require('express').Router();

router.get('/room_list',function(req,res){
    res.render('client/room_list', { title: 'Express' })
})

module.exports = router;

