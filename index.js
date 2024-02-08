const express = require('express');
const { testConnection } = require('./db/conn');
const app = express();
const PORT = 8080;

testConnection();
app.use(express.json());

app.get('/health', (req, res) => {
    res.send('OK');
});

// import routes
const userRoutes = require('./routes/userRoutes');

// use routes
app.use('/users', userRoutes.modules);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});