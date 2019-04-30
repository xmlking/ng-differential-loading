import { Component, OnInit } from '@angular/core';
import {AddOffline, AddOnline, CountState, RemoveOffline, RemoveOnline} from './count.state';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';

@Component({
  selector: 'lib-mylib',
  template: `
    <h1>Online {{online$ | async}}</h1>
    <button (click)="addOnline()">Add Online</button>
    <button (click)="removeOnline()">Remove Online</button>
    <br/>
    <h1>Offline {{offline$ | async}}</h1>
    <button (click)="addOffline()">Add Offline</button>
    <button (click)="removeOffline()">Remove Offline</button>
  `,
  styles: []
})
export class MylibComponent implements OnInit {
  @Select(CountState.getOnline) online$: Observable<number>;
  @Select(CountState.getOffline) offline$: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit() {
    console.log('in MylibComponent');
  }

  addOnline() {
    this.store.dispatch(new AddOnline());
  }

  removeOnline() {
    this.store.dispatch(new RemoveOnline());
  }

  addOffline() {
    this.store.dispatch(new AddOffline());
  }

  removeOffline() {
    this.store.dispatch(new RemoveOffline());
  }
}
