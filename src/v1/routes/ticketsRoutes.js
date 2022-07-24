const express = require('express');
const router = express.Router();
const ticketController = require('../../controllers/ticketController');

router.get('/', ticketController.getAllTickets)
router.get('/:ticketId', ticketController.getOneTickets)
router.post('/:ticketId', ticketController.createNewTickets)
router.delete('/:ticketId', ticketController.deleteTickets)

module.exports = router;
