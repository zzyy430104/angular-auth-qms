"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.handleError = function (error) {
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
    AuthService.prototype.login = function (loginForm) {
        return this.http.post("http://localhost:3000/authentication/sign-in", loginForm);
        // .pipe(catchError(this.handleError));
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
