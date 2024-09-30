// server.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const redisClient = require('redis').createClient();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
