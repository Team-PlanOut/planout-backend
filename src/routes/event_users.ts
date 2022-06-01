import express from 'express';

const eventUserController = require('../controllers/event_usercontroller');

const router = express.Router();

router.get('/', eventUserController.getAll);
router.get('/users/:id', eventUserController.getUsersByEventId); //eventusers/users/1
router.get('/events/:id', eventUserController.getEventsByUserId);
router.post('/', eventUserController.saveUserEvent);
router.put('/:id', eventUserController.saveUserEvent);
router.delete('/:id', eventUserController.deleteUserEvent);

module.exports = router;
