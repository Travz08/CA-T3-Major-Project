Oauth

- Installed passport and passport-google-oauth20 via npm with the save flag

- going to take passport library and tell it, how to make use of google Strategy inside of our application.

```js
passport.use(new GoogleStrategy());

```
new GoogleStrategy creates a new instance of the Google Passport strategy. It says, hey app/passport I want to authenticate users with google. Inside the GoogleStrategy we are going to pass in some config that tells GS how to authenticate users in our app.

passport.use; Can think of as a generic registers. Can think of it as telling Passport there is a new strategy available to authenticate users.

### Enabling GoogleOauth

Before we use the Google Strategy we have to give it a client id and client secret. These are provided directly from the Google Oauth service. So Google are aware, we need to sign up to the Google Oauth API.

- Sign up to console.developers.google.com

- Create new project
- We need to enable google oauth api
- we are also going to create brand new API credential.

Search for Google + API and then select enable.

### Securing API keys

Moving the keys to ur config folder we require the in our server js and then set them like so

```js

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret
}));


```

Expanding further

```js
passport.use(new GoogleStrategy(
  {
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
},
accessToken => {
  console.log(accessToken)
  }
)
);


```

We need some config for whenever a user goes to /auth/google and kick start the flow being managed by Passport.

```js
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
})

```

We are saying here that whenever a user comes to that route, we are starting them on our Oauth flow. This is being entirely managed by passport. We are telling Passport, hey attempt to authorize the user who is coming in on this route and use the strategy google.

The string google is a bit weird hey? We have never explicitly defined google or registered it with passport. Internally the GoogleStrategy has a little code called 'google' saved as a string. That is how passport knows that the little google string will mean 'hey go use the Google Strategy defined above'

The scope specifies to the actual google servers, what access we want to the google servers.


Ok, cool let's try and go to the route. Turning on the server we get directed to google, great! However we get shown the error redirect_uri_mismatch.

The reason is because we did not set up our Oauth account properly. On the callbackURL property, where we say send user back to auth/google/callback we had not properly set up our oAuth account that was a valid url to be redirected to. It is entirely security related. Copy the link provided by the Google Docs and added the authorized redirect URI.

We now need a callback that will handle the route exchange.

Once we allow our route, viola we now get to google select your email screen, how good! However we are still have not done anything with the user. When we select the email from the google screen, we get hung up there. If you look at the console however we get a long string. This is from the code below.

```js
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken) => {
  console.log(accessToken)
  })
);

```

```js
app.get('/auth/google/callback', passport.authenticate('google'))
```
This is the route handler for when the user gets routed back from Google to localhost:27017/auth/google/callback?code=x

This takes the user request and does the code exchange. So this route is for when the user visits auth/google/callback. We are telling passport to handle this request. The interesting thing about this route is that when the user gets sent back to auth/google/callback inside of the URL they will have the code='some string' available. Passport will then see that the code is in the URL and will say 'Oh the user is not attempting to be authenticated for the first time, they want to turn it into a profile.'


Since the console logged the accessToken, this means it is in here, the callback function the second argument to the GoogleStrategy was executed. This is our opporutnity to take the user info and save it to our database.

### Access and Refresh Tokens

```js
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log('Access Token', accessToken)
  console.log('Refresh Token', refreshToken)
  console.log('Profile', profile)
  })
);
```

Looking at the flow, every time we make the request, the browser just hangs. This is because the request is pending on our server and is waiting for us to do something.

Access Token is the token that allows us to talk to Google. We have been given permission from the user to manage/read their accounts.

Refresh Token allows us to refresh the access token. The Access token expires over time so this refreshes the access token.

Great, so we got access to all this info but we need to store it.



### Passport Callbacks

When we are finished with passport and google strategy and need to call done.

```js
if (existingUser) {
  // we have user with an id in our database.
  done(null, existingUser);
}
```
Tells passport, hey great, we found the user and we are done with you and google.

```js
User.findOne({ googleId: profile.id }).then((existingUser => {
  if (existingUser) {
    // we have user with an id in our database.
    done(null, existingUser);
  } else {
    // we will create a user into our database.
    // remember calling new User - creates a mongoose model instance.
    // A model instance represents a single record inside of the collection.
    new User({
      googleId: profile.id,
       profileName: profile.displayName,
        first_name: profile.name.givenName,
         last_name: profile.name.familyName
       })
       .save()
       .then(user => done(null, user));
  }
```

Remember calling new User - creates a mongoose model instance. A model instance represents a single record inside of the collection.

We then save that instance and then in the callback we get another model instance. They both represent the same nderlying model/record inside of our collection. In convention we always use the one provided to us in the promise callback (user).

### Encoding Users

We need to take the user model, and pass it a cookie that says they are that person.

```js
passport.serializeUser((user, done) => {
  done(null, user.id)
});
```
done is a callback that we have to call after doing some work after we have done some work nudging passport along. 1st argument to done is an error object if one exists. Since this is simple, we don't expect an error to occur. Hence why we call null. 2nd argument is the identifying piece of information that will identify the user in follow up requests, it is called user.id.

This user.id is not the google profile id, which is a little bit confusing. This is the id that is in our collection, it is the unique identifier that was automatically generated by mongo. OAuth is for signing in only, after that we use our own id.


## Enabling cookies

Express does not know how anything about cookies. 

`npm install --save cookie-session`

required both passport and cookie-session into server.js
