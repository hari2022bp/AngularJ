// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { LoginModule } from './login/login/login.module';

// @NgModule({
//   imports:      [ BrowserModule, FormsModule, LoginModule],
//   declarations: [ AppComponent,LoginComponent ],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { }

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { LoginModule } from './login/login/login.module';
//  // Corrected import path

// @NgModule({
//   imports: [
//     BrowserModule,
//     FormsModule,
//     LoginModule
//   ],
//   declarations: [
//     AppComponent,
//     LoginComponent
//   ],
//   providers: [
//     provideHttpClient(withInterceptorsFromDi()) // Added provideHttpClient to providers
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }




import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient() // Add provideHttpClient here
  ]
}).catch(err => console.error(err));