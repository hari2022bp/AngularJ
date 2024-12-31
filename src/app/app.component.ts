import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginModule } from './login/login/login.module';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    LoginModule,LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LoginTest';
}
