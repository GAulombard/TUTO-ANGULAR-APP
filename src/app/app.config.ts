import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { CoreModule } from './core/core.module';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { httpInterceptorProviders } from './core/interceptors';
import { AuthRoutingModule } from './auth/auth-routing.module';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), importProvidersFrom(HttpClientModule), httpInterceptorProviders, BrowserModule, CoreModule, FaceSnapsModule, LandingPageModule, AuthModule, AuthRoutingModule]
};
