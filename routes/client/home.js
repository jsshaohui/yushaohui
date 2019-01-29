var router = require('express').Router();

router.get('/',function(req,res){
    res.render('client/index', { title: 'Express' })
})

module.exports = router;

