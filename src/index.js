//Importing the packages
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const agendaController = require('./controller/agendaController')

//assigning the port
const port = process.env.PORT || 2924;

//Assigning the express to the app variable
const app = express();

//Using cors to prevent from the cors errors
app.use(cors());

app.use(express.json());


//API Points
app.use('/agenda', agendaController)

app.get("/", (req, res) => {
    return res.status(200).send("Welcome to the agenda API ")
})
//export the app and port 
module.exports = {
    app,
    port
}

