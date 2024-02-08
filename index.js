const express = require('express');
const dotenv = require('dotenv');
const {testConnection} = require('./db/conn');
dotenv.config();
const app = express();
const PORT = 8080;

testConnection();

app.get('/health', (req, res) => {
    res.send('OK');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});