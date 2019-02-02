var router = require('express').Router();

router.get('/login',function(req,res){
    res.render('client/login', { title: 'Express' })
})

module.exports = router;

