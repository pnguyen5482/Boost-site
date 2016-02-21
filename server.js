var express         = require('express');
var port            = process.env.PORT || 3000;
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var mongoose        = require('mongoose');
var app             = express();

// Express Configuration
// -----------------------------------------------------
// Sets the connection to MongoDB
mongoose.connect("mongodb://localhost/Boost");

// Logging and Parsing
app.use('/public', express.static(__dirname + "/public"));                // sets the static files location to public
app.use('/bower_components',  express.static(__dirname + '/bower_components')); // Use BowerComponents
app.use("/css", express.static(__dirname + '/views/css'));
app.use("/fonts", express.static(__dirname + '/views/fonts'));
app.use("/img", express.static(__dirname + '/views/img'));
app.use("/js", express.static(__dirname + '/views/js'));
app.use("/font-awesome", express.static(__dirname + '/views/font-awesome'));
app.use("/less", express.static(__dirname + '/views/less'));
app.use("/css", express.static(__dirname + '/views/aboutus/css'));
app.use("/fonts", express.static(__dirname + '/views/aboutus/fonts'));
app.use("/img", express.static(__dirname + '/views/aboutus/img'));
app.use("/js", express.static(__dirname + '/views/aboutus/js'));
app.use("/less", express.static(__dirname + '/views/aboutus/less'));
app.use(morgan('dev'));                                         // log with Morgan
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json
app.use(methodOverride());

// Routes
// ------------------------------------------------------
    require('./app/routes.js')(app);
app.get('/', function(req, res){
    res.sendfile(__dirname + '/views/index.html');
});

app.get('/about', function(req, res){
    res.sendfile(__dirname + '/views/aboutus/index.html');
});


app.listen(port);
console.log('App listening on port ' + port);