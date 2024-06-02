import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginForm } from '../models/loginModel';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private readonly authService: AuthService) {}

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  login() {
    const email: string = this.loginForm.value.email;
    const pws: string = this.loginForm.value.password;

    this.authService
      .login({
        email,
        password: pws,
      })
      .subscribe((res: any) => {
        // console.log(res.accessToken);

        localStorage.setItem('accessToken', res.accessToken);
      });
  }
}
