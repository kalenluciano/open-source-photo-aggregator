const { Router } = require('express');
const router = Router();

const userRouter = require('./user');
const photoRouter = require('./photo');
const newsEventRouter = require('./newsEvent');

router.use('/users', userRouter);
router.use('/photos', photoRouter);
router.use('/news-events', newsEventRouter);

module.exports = router;
