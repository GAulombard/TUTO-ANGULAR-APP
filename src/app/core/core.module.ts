import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HeaderComponent
  ],
  providers: [
    importProvidersFrom(HttpClientModule),
    httpInterceptorProviders
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
