import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginForm } from "./models/loginModel";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred 客户端或网络错误:", error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was/后端返回不成功状态码: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () =>
        new Error(
          "Something bad happened; please try again later./用户界面有错误发生 "
        )
    );
  }
  constructor(private readonly http: HttpClient) {}

  login(loginForm: LoginForm) {
    return this.http.post(
      "http://localhost:3000/authentication/sign-in",
      loginForm
    );
    // .pipe(catchError(this.handleError));
  }
}
