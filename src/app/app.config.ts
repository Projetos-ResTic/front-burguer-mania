import { ApplicationConfig, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';


import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration()
  ]
};

