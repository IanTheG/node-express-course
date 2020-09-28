/* Gives access to aspress library by searching the
node_modules for "express". */
const express = require('express');
/* Creates an instance of the express constructor 
called app */
const app = express();

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

    /* Words with a colon in front of them are treated
    like variables in Express. You can then access each
    one through req.params */
    app.get('/users/:id',function(req,res){
        console.log(req.params.id)
        res.json({
            success: true,
            message: 'got one user',
            user: req.params.id
        })
    })
    
    












// Include this at the end of the server.js file
/* Starts server on local port: http://localhost:8000 */
app.listen(8000, function() {
    console.log("server is running");
})

