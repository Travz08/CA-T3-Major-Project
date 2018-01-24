const expect = require('expect');
const request = require('supertest');

// need to import the server and model.
const {app} = require('./../server');
const {Log} = require('./../models/logs');
const {Post} = require('./../models/post');
const {ClassRoom} = require('./../models/classroom');
const {ObjectID} = require('mongodb');

const post = [{
  _id: new ObjectID(),
  type: 'First test post'
}, {
  _id: new ObjectID(),
  type: 'Second test post'
}];

const logs = [{
    _id: new ObjectID(),
    date: 2017/08/09
  }, {
    _id: new ObjectID(),
    date: 2018/07/09
}];

const classroom = [{
  _id: new ObjectID(),
  className: 'Coder Academy 2017',
  date_started: 2017/08/07,
  date_ended: 2018/01/01
}, {
  _id: new ObjectID(),
  className: 'Coder Academy 2018',
  date_started: 2018/08/07,
  date_ended: 2019/01/01
}]

// testing lifecycle method.
// will run before every test case. Will only move to other test case after done is called
// insertMany will insert the contents of the todo array
beforeEach((done) => {
  Post.remove({}).then(() => {
    Post.insertMany(post);
  }).then(() => done());
});

beforeEach((done) => {
  Log.remove({}).then(() => {
    Log.insertMany(logs);
  }).then(() => done());
});

beforeEach((done) => {
  ClassRoom.remove({}).then(() => {
    ClassRoom.insertMany(classroom);
  }).then(() => done());
});


describe('GET /posts', () => {
  it('should get all posts', (done) =>{
    request(app)
    .get('/posts')
    .expect(200)
    .expect((res) => {
      expect(res.body.post.length).toBe(2)
    })
    .end(done);
  })
})

// assuming there is nothing in our database.
// asynchronous test so have to specify done.
// have not updated for private routes.
describe('POST /post/new', () => {
  it('should create a new post', (done) => {
    var type = 'Test post text';
    request(app)
    .post('/post/new')
    .send({type})
    .expect(200)
    .expect((res) => {
      expect(res.body.type).toBe(type);
    })
    //handing errors
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      //testing if it is added to database
      Post.find({type}).then((posts) => {
        expect(posts.length).toBe(1);
        expect(posts[0].type).toBe(type);
        done();
        // statement syntax as apposed to arrow function.
      }).catch((e) => done(e));
    })
  })
});

describe('GET /logs', () => {
  it('should get all logs', (done) =>{
    request(app)
    .get('/logs')
    .expect(200)
    .expect((res) => {
      expect(res.body.logs.length).toBe(2)
    })
    .end(done);
  })
})

describe('POST /logs/new', () => {
  it('should create a new log', (done) => {
    var date = 2017/08/09 ;
    request(app)
    .post('/logs/new')
    .send({date})
    .expect(200)
    .expect((res) => {
      expect(res.body.date).toBe('1970-01-01T00:00:00.028Z');
    })
    //handing errors
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      //testing if it is added to database
      Log.find({date}).then((logs) => {
        expect(logs.length).toBe(2);
        done();
        // statement syntax as apposed to arrow function.
      }).catch((e) => done(e));
    })
  })
});

describe('GET /class', () => {
  it('should get all classrooms', (done) =>{
    request(app)
    .get('/class')
    .expect(200)
    .expect((res) => {
      expect(res.body.classroom.length).toBe(2)
    })
    .end(done);
  })
})
