import { Observable } from 'rxjs';

// import 'rxjs/add/operator/take';
// import 'rxjs/add/operator/catch';

// ======================================================
// noAction operator
// ======================================================
Observable.prototype.noAction = function noAction() {
  return this.filter(() => false);
  // return Rx.Observable.create((observer) => {
  //   this.subscribe({
  //     next: () => observer.next({ type: '@@NO_ACTION' }),
  //     error: (err) => observer.error(err),
  //     complete: () => observer.complete(),
  //   });
  // });
};
