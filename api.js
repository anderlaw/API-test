var express = require('express');
var router = express.Router();

/** define your api interface here  */

/* test api */
router.get('/test', function (req, res, next) {
    res.send('API touched')
})
module.exports = router;