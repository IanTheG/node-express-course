/* Gives access to aspress library by searching the
node_modules for "express". */
const express = require('express');
/* Creates an instance of the express constructor 
called app */
const app = express();
















// Include this at the end of the server.js file
/* Starts server on local port: http://localhost:8000 */
app.listen(8000, function() {
    console.log("server is running");
})

