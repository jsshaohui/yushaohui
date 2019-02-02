var router = require('express').Router();

router.get('/register',function(req,res){
    res.render('client/register', { title: 'Express' })
})

module.exports = router;

