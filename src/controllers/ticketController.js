const ticketService = require('../services/ticketService');
const mysqlConnection = require("../database/database");

const getAllTickets = (req, res) => {
    mysqlConnection.query('SELECT * FROM `ticket`', (err, rows, fields) => {
        if (!err){
            res.send(rows)
        }else  {
            console.log('hola')
        }
    })
    // const allTickets = ticketService.getAllTickets();
    // res.send(allTickets);
}
const getOneTickets = (req, res) => {
    const oneTickets = ticketService.getOneTickets(req.params.ticketId);
    res.send(`Obtener un ticket en especifico ${req.params.ticketId}`);
}
const createNewTickets = (req, res) => {
    const createTickets = ticketService.createNewTickets(req.params.ticketId);
    res.send("Crear un nuevo ticket");
}
const deleteTickets = (req, res) => {
    ticketService.deleteTickets(req.params.ticketId);
    res.send("Eliminar un ticket")
}

module.exports = {
    getAllTickets,
    getOneTickets,
    createNewTickets,
    deleteTickets
}
