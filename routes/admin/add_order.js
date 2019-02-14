var router = require('express').Router();

router.get('/add_order',function(req,res){
    res.render('admin/add_order', { title: 'Express' })
})

module.exports = router;

