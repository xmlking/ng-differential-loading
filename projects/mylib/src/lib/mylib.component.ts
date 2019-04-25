import { Component, OnInit } from '@angular/core';
import {Add, CountState} from './count.state';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';

@Component({
  selector: 'lib-mylib',
  template: `
    <h1>Count is {{count$ | async}}</h1>
    <button (click)="onClick()">Click Me</button>
  `,
  styles: []
})
export class MylibComponent implements OnInit {
  @Select(CountState) count$: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit() {
    console.log('in MylibComponent');
  }

  onClick() {
    this.store.dispatch(new Add());
  }
}
