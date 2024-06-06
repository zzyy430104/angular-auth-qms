import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { finalize, tap, throwError } from "rxjs";

export class TokenSetInterceptor implements HttpInterceptor {
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

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    console.log("INTERCEPTOR IS RUNNING");

    // const token = localStorage.getItem('accessToken');
    // const tokenHeader = req.clone({
    //   headers: req.headers.set('accessToken', token),
    // });

    // console.log(tokenHeader);

    // return next.handle(tokenHeader);
    const started = Date.now();
    let ok: string;

    // extend server response observable with logging
    return next.handle(req).pipe(
      tap({
        // Succeeds when there is a response; ignore other events
        next: (event) =>
          (ok = event instanceof HttpResponse ? "succeeded" : ""),
        // Operation failed; error is an HttpErrorResponse
        error: (_error) => {
          ok = "failed";
          this.handleError(_error);
        },
      }),
      // Log when response observable either completes or errors
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${req.method} "${req.urlWithParams}"
             ${ok} in ${elapsed} ms.`;
        // this.messenger.add(msg);
        console.log("拦截器显示信息：", msg);
      })
    );
  }
}
