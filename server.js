// requrie dependancies 
var express = require("express"); 
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");
var friends = require("./app/data/friends");
var fs = require("fs");

// var runTableQuery = require("./app/data/tables");
// dependancies installed 

// set up express on PORT 3008
var app = express();
var PORT = process.env.PORT || 3008;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// call modules

apiRoutes(app);
htmlRoutes(app);

// runTableQuery(runTableQuery);



// set up listener and start the server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});