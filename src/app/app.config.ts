import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { X_TOKEN} from 'lib-a/service-x'

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    { provide: X_TOKEN, useValue: 'OTHER_VALUE'},
    provideRouter(routes)
  ]
};
