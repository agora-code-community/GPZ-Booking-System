var express = require('express');
var router = express.Router();

//Register
router.get('/register',(req, res, next) =>{
    res.send('Register')
});

module.exports = router; 