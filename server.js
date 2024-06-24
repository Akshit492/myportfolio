// require("dotenv").config;
// const express =require("express");
// const cors = require("cors");
// const path = require("path");
// const contactRoute=require('./route/contactRoute')

// const app =express();

// //creatng the middleware
// app.use(express.json());
// app.use(cors());

// app.use("/",contactRoute);

// if(process.env.NODE_ENV==="production"){
//     app.use(express.static("client/build"))
//     app.get("*",(req,res)=>
//        ( res.sendFile(path.resolve(__dirname,"client","build","index.html")))

//     );
// }

// const port =process.env.PORT || 5000;
// app.listen(port, console.log(`server listening to port ${port} only`));
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const contactRoute = require('./route/contactRoute');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/', contactRoute);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
