import {
  Observable,
  of as observableOf
} from 'rxjs';

import {
  mergeMap,
  takeUntil,
  take,
  merge,
  catchError
} from 'rxjs/operators';

// import { triggerResumeValidationModal } from 'components/resumeValidation/state/actions';
//
// import promiseRace from 'utils/promise-race';
// import { push } from 'react-router-redux';
//
// const FETCH_TIMEOUT = 60000;
// const RESPONSE_DELAY = 0;
// const DEFAULT_ERROR_MESSAGE = 'Ωπ! Κάτι δεν πήγε καλά. Προσπάθησε πάλι, σε λίγο!';
//
// const getErrorMsg = (errors) => errors.map(error => error.description);

// const handleError = (onErrorAction, errors) => {
//   let cb;
//   const code = errors && errors[0].code;
//   switch (code) {
//     case 'FATAL_APPLICATION_CODE_ERROR':
//       cb = push('/error/fatal');
//       break;
//     case undefined:
//       cb = onErrorAction({message: DEFAULT_ERROR_MESSAGE + '!', type: 'error'});
//       break;
//     case 'VALIDATION_ERROR':
//       cb = triggerResumeValidationModal({
//         data: errors[0].validationErrors,
//         flag: errors[0].validationFlag,
//       });
//       break;
//     default:
//       cb = onErrorAction({message: getErrorMsg(errors), type: 'error'});
//   }
//   return cb;
// };

// ======================================================
// noAction operator
// ======================================================
Observable.prototype.noAction = function noAction() {
  return this.filter(() => false);
};

// ======================================================
// token error operator
// ======================================================

export const serverError = (
  action$,
  successAction,
  failureAction,
  handleAction
) =>
  catchError((error, source) => {
    if (error.response && error.response.status === 401) {
      // do refresh token call and
      // Start listening for refreshTokenSuccess, then kick off the reauth
      return action$.ofType(successAction.type)
      .pipe(
        takeUntil(action$.ofType(failureAction)), // stop this stream when refresh token failure recieved
        take(1), // only take first stream if more than 1
        mergeMap(_ => source), // call get data again if new access token received
        merge( observableOf(handleAction()) ) // get new access token
      );
    } else {
      return observableOf(
        failureAction({
          errorType: 'error',
          errorMessage: 'Something went wrong. Please try again in a few minutes'
        })
      ); // failure action
    }
  });
