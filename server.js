var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var handlebars = require('handlebars');


var app = express();
var port = process.env.PORT || 3000;



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
app.use(methodOverride("_method"));
app.engine('handlebars',exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
var routes = require("./controllers/routes.js");
app.use('/', routes);

app.use(routes);

app.listen(port, function() {
  console.log("App now listening at localhost:" + port);
});