import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {provideRouter} from '@angular/router';
import {importProvidersFrom} from '@angular/core';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {routes} from './app/app.routes';

bootstrapApplication(App,   {
  providers: [
    provideRouter(routes),
    importProvidersFrom(ReactiveFormsModule),
    provideHttpClient(withInterceptorsFromDi())
  ]
})
  .catch((err) => console.error(err));
