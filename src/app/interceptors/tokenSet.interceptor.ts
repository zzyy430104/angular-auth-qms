import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

export class TokenSetInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    console.log('INTERCEPTOR IS RUNNING');

    const token = localStorage.getItem('accessToken');
    const tokenHeader = req.clone({
      headers: req.headers.set('accessToken', token),
    });

    console.log(tokenHeader);

    return next.handle(tokenHeader);
  }
}
