// DEPENDENCIES
var path = require("path");
var friendsData = require("../data/friends.js");
//create modul exports
module.exports = function (app) {
    app.get("/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
        res.json(friendsData);
    });
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/public/survey.html", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("/public/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("/survey.html", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });  
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};


