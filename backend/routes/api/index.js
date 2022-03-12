const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const albumRouter = require('./albums')
const photoRouter = require('./photos')
const commentRouter = require('./comments')
const listUserRouter = require('./user')
router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/photos', photoRouter);

router.use('/albums', albumRouter);

router.use('/comments', commentRouter);

router.use('/listUsers', listUserRouter);


// router.post('/test', (req, res) => {
//     res.json({ requestBody: req.body });
// });

module.exports = router;
