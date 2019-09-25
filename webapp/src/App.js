import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux'
import { createBrowserHistory as createHistory} from 'history'
import { ConnectedRouter as Router, routerMiddleware } from 'connected-react-router'

import { Root } from 'routes';
import { appReducer, rootEpic } from 'store';
// import throttle from 'lodash/throttle';
// import { saveState, loadState } from 'model-services';

// const persistedState = loadState();

const history = createHistory();

const epicMiddleware = createEpicMiddleware();

const middleware = [
  routerMiddleware(history),
  epicMiddleware
];

const enhancers = [];

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  window.__REDUX_DEVTOOLS_EXTENSION__ && enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(
  appReducer(history),
  // persistedState,
  compose(
    applyMiddleware(...middleware),
    ...enhancers,
  ));

epicMiddleware.run(rootEpic);

// store.subscribe(throttle(() => {
//   saveState({
//   });
// }, 1000));

const App = () => (
    <Provider store={store}>
      <Router history={history}>
        <Root />
      </Router>
    </Provider>
);

export default App;

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))
