const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.send(`Hola mundo bb ${req.baseUrl}`)
})

module.exports = router;
