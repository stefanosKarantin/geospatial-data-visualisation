import React from 'react';

import {
  // Route,
  // withRouter
} from 'react-router-dom';

import { classes } from './style';

import { Map } from '../components'
const Home = () => (
  <div style={{height: '100%'}}>
    <div className={classes.mapWrapper}>
      <Map />
      <div className={classes.filters}><span>FILTERS</span></div>
    </div>
    <div className={classes.timeline}>TIMELINE</div>
  </div>
);

export default Home;
