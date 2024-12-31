// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


  import { bootstrapApplication } from '@angular/platform-browser';
  import { provideHttpClient } from '@angular/common/http';
 import { AppComponent } from './app/app.component';
  
  bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient() // Ensure this is included
    ]
  }).catch(err => console.error(err));