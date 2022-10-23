const { Router } = require('express');
const router = Router();
const userRouter = require('./user');
const photoRouter = require('./photo');
const newsEventRouter = require('./newsEvent');

router.use('/user', userRouter);
router.use('/photo', photoRouter);
router.use('/news-event', newsEventRouter);

module.exports = router;
