/* Gives access to aspress library by searching thenode_modules for "express". */
express = require('express');
/* Creates an instance of the express constructor called app */
const app = express();

/* So far, we have only made GET requests to our server. A POST request can send data securely through the request body. In order to make POST requests, first we need to include the "body-parser" library from our node_modules (included with express). Add these lines after the app variable: */
const bodyParser = require('body-parser');
app.use(bodyParser.json());

/* ------------------------------ */

// A mock object with a GET command
const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
    ]
app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

/* You just made your first endpoint! This function will respond to a GET request at http://localhost:8000/users with a JSON file, which includes our mockData under the key 'users'. Let's test it out!
Restart your server (CTRL+C, then run node server.js) since we changed the file. Open a browser and navigate to http://localhost:8000/users
You should see a JSON file, served up from your terminal!
*/



/* ------------------------------ */

/* In Express, words with a colon in front of them in the url are treated as variables. You can access the value of each variable through req.params, like this: */
app.get('/users/:id', function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})
    
/*  You can use dynamic variables to search for specific 
data associated with an id in your data and return 
that (instead of just returning the id). */

/* ------------------------------ */

/*  Let's write a function to handle a POST request made to the 'login' endpoint, as if a user was trying to log in: */
app.post('/login', function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
         res.json({
              success: true,
              message: 'password and username match!',
              token: 'encrypted token goes here'
         })
    } else {
         res.json({
              success: false,
              message: 'password and username do not match'
         })
    }
})

/* Notice how we used app.post this time instead of app.get. 
We also compared the values passed from the request body to see if they match our mock data (which would normally come from a database). 
If they match, it will send a JSON file with an additional value, where a token could be stored. 
However, if they don't match, it will return an error message (without the token).

As a security precaution, you should never save passwords directly into your database. 
Use a tool like bcrypt to save a hashed version, which will be decoded at login.
*/

/* ------------------------------ */

/* Custom endpoint or folder containing pictures */

const picturesLibrary = [
    {pic1:'test'}
]
app.get('/pictures/',function(req,res){
    res.json({
        success: true,
        message: 'got pictures',
        pictures: picturesLibrary
    })
})





/* ------------------------------ */

// Include this at the end of the server.js file
/* Starts server on local port: http://localhost:8000 */
app.listen(8000, function() {
    console.log("server is running");
})
/* If everything was successful, you should see the console.log message we supplied in the callback: "server is running". 
This happens because the file is being run on our terminal. 
To end this process, push CTRL+C. 
Whenever you make changes to your server, you need exit and restart it.
*/
