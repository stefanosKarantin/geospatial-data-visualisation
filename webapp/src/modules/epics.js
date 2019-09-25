import { combineEpics } from 'redux-observable';
import {
//   interval as observableInterval,
  Observable,
  of as observableOf,
  from as observableFrom,
  defer as observableDefer
} from 'rxjs';

import {
  mergeMap,
  map,
  switchMap,
  catchError,
  takeUntil,
  take,
  merge,
  concat,
  flatMap
} from 'rxjs/operators';

import {  } from 'store/operators';

import _ from 'lodash';

import { push } from 'connected-react-router';

// import axios from 'axios';

import {

} from 'redux-form';



import {

} from 'utils';

// import { dataSubscription } from './subscription';

import {

} from './actions';



const homeEpic = combineEpics(

);

 export default homeEpic;
