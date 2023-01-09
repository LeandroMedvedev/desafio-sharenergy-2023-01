"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
var express_1 = require("express");
var session_route_1 = require("./session.route");
var user_route_1 = require("./user.route");
var router = (0, express_1.Router)();
var apiRouter = function () {
    router.use('/users', (0, session_route_1.sessionRoutes)());
    router.use('/users', (0, user_route_1.userRoutes)());
    return router;
};
var appRoutes = function (app) {
    app.use('/api', apiRouter());
};
exports.appRoutes = appRoutes;
//# sourceMappingURL=index.js.map