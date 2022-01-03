require('dotenv').config();
const express = require('express');
const router = require('./src/router');

const app = express();

const cors = require('cors');
app.use(cors('*'));

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT} -> http://localhost:${PORT}`);
});