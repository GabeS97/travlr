const router = require('express').Router();
const apiRouter = require('./api');

router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});



router.use('/api', apiRouter);
module.exports = router;
