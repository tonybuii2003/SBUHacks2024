const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv').config();
const port = 8000;


const gptRoutes = require('./routes/gptRoutes');
const journalRoutes = require('./routes/journalRoutes');

const app = express();
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))

app.use('/', gptRoutes)
app.use('/', journalRoutes)


app.listen(port, () => console.log(`Server listening on port ${port}`));

