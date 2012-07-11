// Twitter Stream Mentions and Websocket
var express = require('express');
var app = express.createServer();


// Web Server


app.set('view engine', 'ejs');
app.set('view options', {
    layout: false
});

app.set('views', __dirname + '/views');
//set path to static files
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());
//handle GET requests on /


// Main application response
app.get('/', function(req, res){
	res.render('index.ejs', {title: 'Franz Enzenhofer'});
});

var port = process.env.PORT || 3000;
app.listen(port);

