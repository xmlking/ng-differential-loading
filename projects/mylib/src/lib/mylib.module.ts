import { NgModule } from '@angular/core';
import { MylibComponent } from './mylib.component';
import {RouterModule} from '@angular/router';
import {NgxsModule} from '@ngxs/store';
import {CountState} from './count.state';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [MylibComponent],
  imports: [
    CommonModule,
    NgxsModule.forFeature([CountState]),
    RouterModule.forChild([
         {path: '', pathMatch: 'full', component: MylibComponent}
         ])
  ],
  exports: []
})
export class MylibModule { }
