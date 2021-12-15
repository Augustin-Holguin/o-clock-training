require('dotenv').config();
const express = require('express');
const router = require('./router');

const app = express();

app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT} -> http://localhost:${PORT}`);
});