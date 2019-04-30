import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppComponent } from './app.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {AppState} from './app.state';
import {environment} from '../environments/environment';
import {AppHandler} from './app.handler';

// Noop handler for factory function
export function noop() {
  return () => {};
}

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'counter', loadChildren: '@ngx-starter-kit/mylib#MylibModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
      maxAge: 10,
    }),
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules,
        useHash: true
      }
    )
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: noop,
      deps: [AppHandler],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
