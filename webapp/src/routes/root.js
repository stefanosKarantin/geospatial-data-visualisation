import React from 'react';

import {
  Route,
  withRouter
} from 'react-router-dom'

import {
  AppBar
} from './components';

import { Home } from './Home';

const Root = () => (
  <div style={{height: '100%'}}>
    {/*<AppBar />*/}
    <Route exact path='/' component={Home}/>
  </div>
);

export default withRouter(Root);
