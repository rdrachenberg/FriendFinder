// // 4. Your `apiRoutes.js` file should contain two routes:
//    * A GET route with the url`/api/friends`.This will be used to display a JSON of all possible friends.
//    * A POST routes`/api/friends`.This will be used to handle incoming survey results.This route will also be used to handle the compatibility logic. 
var path = require("path");
var friendsData = require("../data/friends.js");
var server = require("../../server");
var express = require("express");
var app = express();
// var waitListData = require("../data/waitinglistData");

// ===============================================================================

// create a module to be used by server.js
module.exports = function (app) {
    // ROUTING
    app.get("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
        res.json(friendsData);
        // console.log(friendsData + "  this is the second call within apiRoutes ")
    });
    app.get("/api/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
        res.json(friendsData);
        // console.log(friendsData + "  this is the second call within apiRoutes ")
    });
    app.post("/api/friends", function (req, res) {
        var requestBody = req.body;
        console.log(requestBody);
        var newUser = -1;
        var newUserScore = 100;
        var currentUserScore = 0;
        // Loop thru all friends in the friends table to identify the friend have the lowest score difference and then return friend so modal opens showing the friend.
        for (i = 0; i < friendsData.length; i++) {

            if (requestBody.sex != friendsData[i].sex) {
                for (k = 0; k < requestBody.scores.length; k++) {

                    currentUserScore = currentUserScore + Math.abs(friendsData[i].scores[k] - requestBody.scores[k]);
                }
                if (currentUserScore <= newUserScore) {
                    newUser = i;
                    newUserScore = currentUserScore;
                }
                currentUserScore = 0;
            }
        }
        friendsData.push(requestBody);
        newFriendDetails = friendsData[newUser];
        res.json(newFriendDetails);

    });
};
