import {Actions, Store} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AppState} from './app.state';

@Injectable({
  providedIn: 'root',
})
export class AppHandler {
  constructor(
    private actions$: Actions,
    private store: Store,
  ) {
    const installed = this.store.selectSnapshot(AppState.installed);
    if (!installed) {
        console.log('not installed');
    } else {
      console.log('installed');
    }
  }
}
