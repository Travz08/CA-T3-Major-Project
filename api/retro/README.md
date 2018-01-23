## Setting up Redux


In the index.js file we have the following

```js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

const store = createStore(() => [], {}, applyMiddleware());


ReactDOM.render(
  <Provider store={store}><App /></Provider>,

   document.getElementById('root')
 );
registerServiceWorker();


```

Created a reducer folder where we created the two files.

In authReducer.js


```js

export default function(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}
```

In index.js of the reducer folder

```js
import { combineReducer } from 'redux';
import authReducer from './authReducer';

export default combineReducer({
  // whatever keys we provide to this object are going to represent the keys that exist in our state object.
  // auth piece of state is being provided by the authReducer.
  auth: authReducer
});

```

In the index.js in src

```js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());


ReactDOM.render(
  <Provider store={store}><App /></Provider>,

   document.getElementById('root')
 );
registerServiceWorker();


```

We can now use redux, kinda. We still need actions.

Installed `yarn add axios redux-thunk`
