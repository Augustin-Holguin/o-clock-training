require('dotenv').config();

const express = require('express');
const ejs = require('ejs');
const dayjs = require('dayjs');
const app = express();
const router = require('./app/router.js');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.use(express.static(__dirname + '/public'));

// urlencoded needed in order to have access to request body
app.use(express.urlencoded({
    extended: true
}));

// app.use((req, res, next) => {
//     console.log(`URL request -> ' ${req.path} '`);
//     console.log(`IP of client -> ${req.ip}`);
//     console.log(`Timestamp: ${dayjs(Date.now()).format('YYYY-MM-DDTHH:mm:ss')}`);
//     next();
// });

app.use(router);

app.use((req, res) => {
    res.render('404');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`)
});