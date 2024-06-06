import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  login() {
    const email: string = this.loginForm.value.email;
    const pws: string = this.loginForm.value.password;

    this.authService.login({ email, password: pws }).subscribe({
      next: (data) => {
        console.log("登录成功", data);
        this.router.navigate(["/index"]);
      },
      error: (err) => {
        console.log("登录失败", err);
        this.router.navigate(["/"]);
      },
    });
  }
}
