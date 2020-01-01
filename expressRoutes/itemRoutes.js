// itemRoutes.js
var express = require('express');
var app = express();
var itemRoutes = express.Router();

// Require Item model in our routes module

let users = [];
// Defined store route
itemRoutes.route('/signup').post(function (req, res) {

    const user = req.body;
    console.log(user);
    users.push(user);
    console.log(users)
        // .then(user => {
        //     res.status(200).json({'User': 'User has been added succesfully'});
        // })
        // .catch(err => {
        //     res.status(400).send("unable to save to database");
        // });
});


module.exports = itemRoutes;
