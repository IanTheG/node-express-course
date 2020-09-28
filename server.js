/* Gives access to aspress library by searching the
node_modules for "express". */
const express = require('express');
/* Creates an instance of the express constructor 
called app */
const app = express();

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














// Include this at the end of the server.js file
/* Starts server on local port: http://localhost:8000 */
app.listen(8000, function() {
    console.log("server is running");
})

