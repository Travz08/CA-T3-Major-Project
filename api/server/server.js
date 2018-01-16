const express = require('express');
require('./models/user');
require('./services/passport')
const bodyParser = require('body-parser');
var {Log} = require('./models/logs');
var {Post} = require('./models/post');
var {ClassRoom} = require('./models/classroom');
var {mongoose} = require('./db/mongoose');

// var {Tag} = require('./models/tag')

const app = express();
app.use(bodyParser.json());

// oAuth routes.
// same as going authRoutes(app) if we imported above.
require('./routes/authRoutes')(app);


const port = process.env.PORT || 27017;

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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
    text: req.body.text,
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
  // creating a new instance of the mongoose model Todo
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
    log_id: req.body.log_id
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


// app.post('/tag/new', (req, res) => {
//   var tag = new Tag ({
//     tag_name: req.body.type,
//     post_id: req.body.post_id
//   })
// });
