"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.ErrorHandler = void 0;
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler(statusCode, message) {
        this.statusCode = statusCode;
        this.message = message;
    }
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;
var errorHandler = function (error, response) {
    if (error instanceof ErrorHandler) {
        return response.status(error.statusCode).json({ message: error.message });
    }
    console.log(error);
    return response.status(500).json({ message: 'internal server error' });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=index.js.map