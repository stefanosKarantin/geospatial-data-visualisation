import { handleActions } from 'redux-actions';

import {

} from './actions';

let initialState = {

};

const reducer = handleActions({
  
  },
  {
    ...initialState,
  },
);

export default reducer;
