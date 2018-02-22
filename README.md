
# A friendly friend finder 

Friend Finder - Node and Express Servers

# About
A compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

# Technologies 
node.JS
Express to handle routing. 
App Deployment on Heroku 

# File Structure 
FriendFinder
  - app
    - data
      - friends.js
    - public
      - home.html
      - survey.html
    - routing
      - apiRoutes.js
      - htmlRoutes.js
  - node_modules
  - package.json
  - server.js


User's most compatible friend guide:
Each users answers will go in a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
Then compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
Return the database friend with the least amount of difference.
Display the result as a modal pop-up with the name and picture of the closest match.