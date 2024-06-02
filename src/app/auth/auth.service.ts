import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from './models/loginModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  login(loginForm: LoginForm) {
    return this.http.post(
      'http://localhost:3000/authentication/sign-in',
      loginForm
    );
  }
}
