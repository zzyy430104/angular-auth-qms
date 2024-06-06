"use strict";
exports.__esModule = true;
exports.ErrorHandleInterceptor = void 0;
var ErrorHandleInterceptor = /** @class */ (function () {
    function ErrorHandleInterceptor() {
    }
    ErrorHandleInterceptor.prototype.intercept = function (req, next) {
        throw new Error("Method not implemented.");
    };
    return ErrorHandleInterceptor;
}());
exports.ErrorHandleInterceptor = ErrorHandleInterceptor;
