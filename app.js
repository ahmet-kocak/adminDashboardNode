const express = require('express');
const path = require('path');
const bodyParser=require("body-parser")
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose=require("mongoose")
require('dotenv').config()
var cors = require('cors');
var postRoutes=require("./routes/post.router")


const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({origin: true, credentials: true}));



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin,  X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.send("coding ahmet");
}); 
app.use("/posts", postRoutes);


var db=require("./db")()


app.listen(process.env.PORT, () => console.log(`Server running on port:${process.env.PORT} `));
module.exports = app;


