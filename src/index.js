const express = require('express');
const v1TicketRouter = require('./v1/routes/ticketsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/v1/tickets', v1TicketRouter);

app.listen(PORT, ()=> {
    console.log(`Servidor ejecuntando en el puerto ${PORT}`);
})

