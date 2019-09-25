import {
  actionProp,
  stateProp,
} from 'store/utils';

import { push } from 'connected-react-router'

import {
  formValueSelector
} from 'redux-form';

import {

} from './actions';

/////////////////////////////////
// ROOT COMPONENT-PROPS
////////////////////////////////

const changeLocation = actionProp((dispatch) =>({
  changeLocation: payload => { dispatch(push(payload)) }
}))

export {
  changeLocation
};
