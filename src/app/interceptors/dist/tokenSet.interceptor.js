"use strict";
exports.__esModule = true;
exports.TokenSetInterceptor = void 0;
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var TokenSetInterceptor = /** @class */ (function () {
    function TokenSetInterceptor() {
    }
    TokenSetInterceptor.prototype.handleError = function (error) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred 客户端或网络错误:", error.error);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error("Backend returned code " + error.status + ", body was/\u540E\u7AEF\u8FD4\u56DE\u4E0D\u6210\u529F\u72B6\u6001\u7801: ", error.error);
        }
        // Return an observable with a user-facing error message.
        return rxjs_1.throwError(function () {
            return new Error("Something bad happened; please try again later./用户界面有错误发生 ");
        });
    };
    TokenSetInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        console.log("INTERCEPTOR IS RUNNING");
        // const token = localStorage.getItem('accessToken');
        // const tokenHeader = req.clone({
        //   headers: req.headers.set('accessToken', token),
        // });
        // console.log(tokenHeader);
        // return next.handle(tokenHeader);
        var started = Date.now();
        var ok;
        // extend server response observable with logging
        return next.handle(req).pipe(rxjs_1.tap({
            // Succeeds when there is a response; ignore other events
            next: function (event) {
                return (ok = event instanceof http_1.HttpResponse ? "succeeded" : "");
            },
            // Operation failed; error is an HttpErrorResponse
            error: function (_error) {
                ok = "failed";
                _this.handleError(_error);
            }
        }), 
        // Log when response observable either completes or errors
        rxjs_1.finalize(function () {
            var elapsed = Date.now() - started;
            var msg = req.method + " \"" + req.urlWithParams + "\"\n             " + ok + " in " + elapsed + " ms.";
            // this.messenger.add(msg);
            console.log("拦截器显示信息：", msg);
        }));
    };
    return TokenSetInterceptor;
}());
exports.TokenSetInterceptor = TokenSetInterceptor;
