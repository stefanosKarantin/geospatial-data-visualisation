import { createAction as createReduxAction } from 'redux-actions';

export const createAction = (nameSpace) => (actionID) => {
  const ACTION_CONST = `${nameSpace}/${actionID}`;
  const actionCreator = createReduxAction(ACTION_CONST);
  actionCreator.type = ACTION_CONST;
  return actionCreator;
};

export default createAction;
