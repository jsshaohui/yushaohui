var router = require('express').Router();

router.get('/add_order',function(req,res){
    res.render('client/add_order', { title: 'Express' })
})

module.exports = router;

