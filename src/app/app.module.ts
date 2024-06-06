import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LoginComponent } from "./auth/login/login.component";

import { ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenSetInterceptor } from "./interceptors/tokenSet.interceptor";

import { MainComponent } from "./main/main.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { InternalExteranlIssuesComponent } from "./main/internal-exteranl-issues/internal-exteranl-issues.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InternalExteranlIssuesComponent,
    MainComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenSetInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
