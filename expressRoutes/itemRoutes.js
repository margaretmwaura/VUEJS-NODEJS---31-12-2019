

var express = require('express');
var app = express();
var itemRoutes = express.Router();

// Require Item model in our routes module

let users = [];
let reviewdata = [] ;
// Defined store route
itemRoutes.route('/signup').post(function (req, res) {

    const user = req.body;
    console.log(user);
    users.push(user);

    console.log(users);
           if(user != null)
           {
               jwt.sign({user},'secretkey' , (error,token)=>{
                       res.status(200).json({token : token})
                   }
               );
           }
           else
           {
               res.status(400).send("unable to save to database");

           }
});

itemRoutes.route('/bookreview').post( function (req, res)
{
  jwt.verify(req.token,'secretkey',(err,auth) =>
  {
      console.log("This is the token " + req.token);
      if(err)
      {
          res.sendStatus(403);
          console.log("There was an error");
      }
      else {
          const review = req.body;
          reviewdata.push(review);
          res.json({
              message : "Post Created",
              auth
          });
      }
  });

});

function verifyToken(req,res,next)
{
    const bearerHeader = req.headers['Authorization'];
    console.log("This is the bearer header " + bearerHeader);
    if(typeof bearerHeader !== 'undefined')
    {
       const bearer = bearerHeader.split(' ');
        const bearertoken = bearer[1];
        req.token = bearertoken;
        next();
    }
    else
    {
        res.sendStatus(403)
    }
}
module.exports = itemRoutes;
