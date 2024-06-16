import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.scss",
})
export class MainComponent {
  constructor(private readonly router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
    console.log("退出了");
  }
}
