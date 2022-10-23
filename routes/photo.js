const { Router } = require('express');
const router = Router();
const photoControllers = require('../controllers/photo');

router.get('/', photoControllers.getAllPhotos);

router.get('/:id', photoControllers.getPhoto);

router.post('/add', photoControllers.createPhoto);

router.put('/:id/update', photoControllers.updatePhoto);

router.delete('/:id/delete', photoControllers.deletePhoto);

module.exports = router;
