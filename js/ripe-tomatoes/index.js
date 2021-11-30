require('dotenv').config();
const express = require('express');
const router = require('./server/router.js');

const app = express();

const cors = require('cors');
app.use(cors('*'));

// urlencoded needed in order to have access to request body
app.use(express.urlencoded({
    extended: true
}));

app.use(router);

app.use((req, res) => {
    res.render('404');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`)
});