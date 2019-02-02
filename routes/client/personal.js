var router = require('express').Router();

router.get('/personal',function(req,res){
    res.render('client/personal', { title: 'Express' })
})

module.exports = router;

