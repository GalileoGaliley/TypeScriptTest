const Router = require('express');
const router = new Router();
const contactController = require('../controllers/contactController.js');


router.post('/create',contactController.create);
router.post('/remove',contactController.remove);
router.post('/getAll',contactController.getAll);

module.exports = router;
