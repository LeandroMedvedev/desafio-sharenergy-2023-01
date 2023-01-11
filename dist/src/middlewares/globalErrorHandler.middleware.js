"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandlerMiddleware = void 0;
var errors_1 = require("../errors");
var globalErrorHandlerMiddleware = function (error, _, response, __) { return (0, errors_1.errorHandler)(error, response); };
exports.globalErrorHandlerMiddleware = globalErrorHandlerMiddleware;
//# sourceMappingURL=globalErrorHandler.middleware.js.map