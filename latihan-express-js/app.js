var express = require('express')
var app = express()

// define middleware function
function logger(req, res, next) {
    console.log(new Date(), req.url)
    next()
}

// calls logger: middleware for each request-response cycle
app.use(logger)

// route that gets executed for the path '/'
app.get('/', function (req, res) {
    res.send('This is a basic Example for Express.js')
})

//menggunakan req.query dengan url parameters
app.get('/api/users', function (req, res) {
    const user_id = req.query.id;
    const token = req.query.token;
    const geo = req.query.geo;

    res.send({
        'user_id': user_id,
        'token': token,
        'geo': geo
    });
});

//menggunakan req.params dengan routers
app.get('/api/:version', (req, res) => {
    res.send(req.params.version);
});

//menggunakan .param dengan route handlers
app.param('name', (req, res, next, name) => {
    const modified = name.toUpperCase();
    req.name = modified;
    next();
});

app.get('/api/users/:name', (req, res) => {
    res.send(`hello ${req.name}!`);
});

//menggunakan req.body dengan post parameters
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.post('/api/users', (req, res) => {
    const user_id = req.body.id;
    const token = req.body.token;
    const geo = req.body.geo;

    res.send({
        "user_id": user_id,
        "token": token,
        "geo": geo
    })
})


// start the server
var express = app.listen(port, function () {
    console.log(`server listening on port ${port}`)
})

// contoh2
// var express = require('express');
// var app = express();
// var router1 = require('./router1')

// app.use('/api/', router1);

// var express = app.listen(8000, function () {
//     console.log('server listening on port 8000')
// })



// contoh1
// var express = require('express');
// var app = express();

// //route that gets executed for GET request and the request url path '/' or
// app.get('/', function (req, res) {
//     res.send('Home.')
// })

// //route that gets executed for GET request and the request url path '/hello/'
// app.get('/hello/', function (req, res) {
//     res.send('Hello page.')
// })

// //route that gets executed for GET request and the request url path '/bye/'
// app.get('/bye/', function (req, res) {
//     res.send('Bye page.')
// })

// //start the server
// var server = app.listen(8000, function () {
//     console.log('Listening on port 8000...')
// })