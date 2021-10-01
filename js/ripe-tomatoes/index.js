const express = require('express');
const ejs = require('ejs');
const dayjs = require('dayjs');
const app = express();
const router = require('./router.js');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.locals.movies = require('./data/movies.json');

app.use((req, res, next) => {
    console.log(`URL request -> ' ${req.path} '`);
    console.log(`IP of client -> ${req.ip}`);
    console.log(`Timestamp: ${dayjs(Date.now()).format('YYYY-MM-DDTHH:mm:ss')}`);
    next();
});

app.use(router);

app.use((req, res) => {
    res.render('404');
})

const port = 3000;
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})