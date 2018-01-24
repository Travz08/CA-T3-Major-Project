const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/user');
require('./services/passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
var {Log} = require('./models/logs');
var {Post} = require('./models/post');
var {ClassRoom} = require('./models/classroom');
var mongoose = require('./db/mongoose');

const app = express();
// telling express that we are using cookies, this will flow down to initialize and session.
app.use(
  cookieSession({
    // how long cookie will last - in miliseconds - this is one month.
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // key we will use to encrypt cookie - in config.
    keys: [keys.cookieKey]
  })
);

// CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*' );
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//initialises authentication module.
app.use(passport.initialize());

//session acts as a middleware to alter the req object
//and change the 'user' value that is currently the session id (from the client cookie)
// into the true deserialized user object - refer to passport.js serialize and deserailzie.
app.use(passport.session());

// telling express to use body parser
app.use(bodyParser.json());

// oAuth routes.
// same as going authRoutes(app) if we imported above.
require('./routes/authRoutes')(app);

const port = process.env.PORT || 5000;

app.get('/', (req, rest) => {
  console.log('Hello World')
});


// getting the logs
app.get('/logs', (req, res) => {
  Log.find().then((logs) => {
    res.send({logs})
  }, (e) => {
    res.status(400).send(e);
  })
})

//posting the logs
app.post('/logs/new', (req, res) => {
  // creating a new instance of the mongoose model Todo
  var log = new Log({
    date: req.body.date,
    classroom_id: req.body.classroom_id
  });

  // will save model to database.
  log.save().then((doc) => {
    res.send(doc);
  }, (e) =>{
    res.status(400).send(e);
  });
});


// getting the classes
app.get('/class', (req, res) => {
  ClassRoom.find().then((classroom) => {
    res.send({classroom})
  }, (e) => {
    res.status(400).send(e);
  })
})
// posting the class
app.post('/class/new', (req, res) => {
  // creating a new instance of the mongoose model class
  var studyClass = new ClassRoom ({
    class_name: req.body.class_name,
    date_started: req.body.date_started,
    date_ended: req.body.date_ended
  });
  // will save model to database.
  studyClass.save().then((doc) => {
    res.send(doc);
  }, (e) =>{
    res.status(400).send(e);
  });
});


// getting a post
app.get('/posts', (req, res) => {
  Post.find().then((post) => {
    res.send({post})
  }, (e) => {
    res.status(400).send(e);
  })
})

// posting a post.
app.post('/post/new', (req, res) => {
  // creating a new instance of the mongoose model Todo
  var post = new Post({
    type: req.body.type,
    title: req.body.title,
    content: req.body.content,
    log_id: req.body.log_id,
    user_id: req.body.user_id,
    profileName: req.body.profileName,
    image_url: req.body.image_url
  });
  // will save model to database.
  post.save().then((doc) => {
    res.send(doc);
  }, (e) =>{
    res.status(400).send(e);
  });
});


app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
