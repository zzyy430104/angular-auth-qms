import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { canActivateTeam } from "../app/auth/canActive.service";
import { MainComponent } from "./main/main.component";
import { PlanningComponent } from "./main/planning/planning.component";
import { HomeComponent } from "./main/home/home.component";
import { SystemComponent } from "./main/system/system.component";
import { DashboardComponent } from "./main/dashboard/dashboard.component";
import { ProductComponent } from "./main/product/product.component";

const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: "full" },
  {
    path: "main",
    component: MainComponent,
    canActivate: [canActivateTeam],
    children: [
      { path: "planning", component: PlanningComponent },
      { path: "home", component: HomeComponent },
      { path: "system", component: SystemComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "product", component: ProductComponent },
    ],
  },
  { path: "**", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
