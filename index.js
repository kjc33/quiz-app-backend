const express = require('express');
const { testConnection } = require('./db/conn');
const { authenticateJWT } = require('./middlewares/authMiddleware');

const app = express();
const PORT = 8080;

testConnection();
app.use(express.json());

app.get('/health', (req, res) => {
    res.send('OK');
});

app.get('/protected', authenticateJWT, (req, res) => {
    res.send('This is a protected route');
});

// import routes
const userRoutes = require('./routes/userRoutes');
const topicRoutes = require('./routes/topicRoutes');
const postRoutes = require('./routes/postRoutes');
const replyRoutes = require('./routes/replyRoutes');

// use routes
app.use('/users', userRoutes.modules);
app.use('/topics', topicRoutes.modules);
app.use('/posts', postRoutes.modules);
app.use('/replies', replyRoutes.modules);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});