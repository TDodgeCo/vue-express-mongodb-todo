const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser')

// mongoose instance connection url
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Tododb')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require('./api/routes/todoListRoutes')
routes(app)

app.listen(port)

// response for invalid route
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

console.log('todo list RESTful API server started on ' + port)

