// import { Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component'; // Import the standalone component

// export const routes: Routes = [
//   { path: 'Login', component: LoginComponent },
//   // Add other routes as needed
// ];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Import the standalone component

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


