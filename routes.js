var express = require('express');
var router = express.Router();
var home = '/home';
/* GET home page */
router.get('/', function(req, res, next) {
    res.redirect(home);
});
router.get('/home', function(req, res, next) {
    res.render('home');
});

module.exports = router;