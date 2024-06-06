"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginForm = new forms_1.FormGroup({
            email: new forms_1.FormControl(),
            password: new forms_1.FormControl()
        });
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var email = this.loginForm.value.email;
        var pws = this.loginForm.value.password;
        this.authService.login({ email: email, password: pws }).subscribe({
            next: function (data) {
                console.log("登录成功", data);
                _this.router.navigate(["/index"]);
            },
            error: function (err) {
                console.log("登录失败", err);
                _this.router.navigate(["/"]);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "app-login",
            templateUrl: "./login.component.html",
            styleUrl: "./login.component.scss"
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
