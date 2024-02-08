const express = require('express');
const app = express();
const PORT = 8080;

app.get('/health', (req, res) => {
    res.send('OK');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});