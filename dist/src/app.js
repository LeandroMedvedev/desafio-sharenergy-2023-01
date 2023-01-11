"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var middlewares_1 = require("./middlewares");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, routes_1.appRoutes)(app);
app.use(middlewares_1.globalErrorHandlerMiddleware);
exports.default = app;
//# sourceMappingURL=app.js.map