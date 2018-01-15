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
