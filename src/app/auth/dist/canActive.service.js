"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.canActivateTeam = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var UserToken = /** @class */ (function () {
    function UserToken() {
    }
    UserToken = __decorate([
        core_1.Injectable({ providedIn: "root" })
    ], UserToken);
    return UserToken;
}());
var PermissionsService = /** @class */ (function () {
    function PermissionsService() {
    }
    PermissionsService.prototype.canActivate = function (currentUser, userId) {
        console.log("canActive is working");
        return true;
    };
    PermissionsService = __decorate([
        core_1.Injectable({ providedIn: "root" })
    ], PermissionsService);
    return PermissionsService;
}());
exports.canActivateTeam = function (route, state) {
    var router = core_1.inject(router_1.Router);
    return core_1.inject(PermissionsService).canActivate(core_1.inject(UserToken), route.params["id"]);
};
