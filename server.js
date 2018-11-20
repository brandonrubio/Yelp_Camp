var express = require('express');
var mongoose = require('mongoose');

var campgrounds = require('./routes/api/campgrounds');

var app = express();

// Express Middleware
app.use(express.json())

// DB Config
var db = require('./config/keys.js').mongoURI;

// Connect To Mongo
mongoose.connect(db, { useNewUrlParser: true }, function(){
  console.log('connected to mongo');
});
mongoose.set('useFindAndModify', false);

// Use Routes
app.use('/api/campgrounds', campgrounds);

var port = 3000;

app.listen(port, function() {
  console.log('server running on port 3000');
});
