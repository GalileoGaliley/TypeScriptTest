const Router = require('express');
const router = new Router();


const userRouter = require('./userRouter.js');
const contactRouter = require('./contactRouter.js');
router.use('/user', userRouter);
router.use('/contact', contactRouter);

module.exports = router;
