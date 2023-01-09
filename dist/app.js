"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var errors_1 = require("./errors");
var app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routes_1.appRoutes)(app);
app.use(function (error, _, response, __) {
    return (0, errors_1.errorHandler)(error, response);
});
exports.default = app;
//# sourceMappingURL=app.js.map