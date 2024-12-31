import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule], 
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  msg: string="";

  constructor(private fb: FormBuilder, private userService: UserService,) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    this.msg = "";
    if (this.loginForm.valid) {
      const user = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      };
      console.log("user:",user);

      this.userService.loginUser(user).subscribe(
        res => {
          this.msg = `Welcome ${user.username}`;
        },
        error => {
          // Handle the error case
          this.msg = "Invalid Credentials.";
        }
      );
      
    } else {
      this.msg = "Form is invalid. Please check the input values.";
      alert("Login failed");
    }
  }
}
