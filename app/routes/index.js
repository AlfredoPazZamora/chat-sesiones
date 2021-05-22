let router = require('express').Router();

let inicio = require('./inicio');
let chat = require('./chat');

router.use('/', inicio);
// router.use('/chat', chat);

module.exports = router;
