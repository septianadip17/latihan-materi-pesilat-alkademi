var express = require('express')
var router1 = express.Router()

//middleware that is specific to this router
router1.use(function timeLog(req, res, next) {
    console.log('Requested URI Path : ', req.url)
    next()
})

//define the home page route
router1.get('/', function (req, res) {
    res.send('Birds home page')
})

//define the about route
router1.get('/about', function (req, res) {
    res.send('About birds')
})

module.exports = router1