const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database/database');
const {json} = require("express");

const getAllTickets = () => {
    mysqlConnection.query('SELECT * FROM `ticket`', (err, rows, fields) => {
        if (!err){
            return rows;
        }else  {
            return err;
        }
    })
}
const getOneTickets = () => {

}
const createNewTickets = () => {

}
const deleteTickets = () => {

}

module.exports = {
    getAllTickets,
    getOneTickets,
    createNewTickets,
    deleteTickets
}
