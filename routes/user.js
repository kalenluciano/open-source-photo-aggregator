const { Router } = require('express');
const router = Router();
const userControllers = require('../controllers/user');

router.get('/', userControllers.getAllUsers);

router.get('/:id', userControllers.getUser);

router.post('/add', userControllers.createUser);

router.put('/:id/update', userControllers.updateUser);

router.delete('/:id/delete', userControllers.deleteUser);

module.exports = router;
