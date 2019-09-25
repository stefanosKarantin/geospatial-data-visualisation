import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'
// import { homeReducer } from 'modules';

const appReducer = (history) => combineReducers({
  form: formReducer,
  router: connectRouter(history),
  // app: homeReducer,
});

export default appReducer;
