const { Router } = require('express');
const router = Router();
const newsEventControllers = require('../controllers/newsEvent');

router.get('/', newsEventControllers.getAllEvents);

router.get('/:id', newsEventControllers.getEvent);

router.post('/add', newsEventControllers.createEvent);

router.put('/:id/update', newsEventControllers.updateEvent);

router.delete('/:id/delete', newsEventControllers.deleteEvent);

module.exports = router;
