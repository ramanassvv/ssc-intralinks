var express = require('express')
var bodyParser = require('body-parser')
var app = express()



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));



//var loginController = require('./controllers/login')

var Employee = require('./controllers/index')
app.use('/rewards', Employee)
var Kudos = require('./controllers/kudos')
app.use('/rewards',Kudos)
var Feedbacks = require('./controllers/feedbacks')
app.use('/rewards',Feedbacks)

//app.post('/login',loginController.login);


app.listen(8080,() => {
  console.log("server listening on port 8080")
});