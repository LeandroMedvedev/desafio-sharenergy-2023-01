"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRoutes = void 0;
var express_1 = require("express");
var controllers_1 = require("../controllers");
var middlewares_1 = require("../middlewares");
var schemas_1 = require("../schemas");
var router = (0, express_1.Router)();
var sessionRoutes = function () {
    router.post('/signin', (0, middlewares_1.validateSchemaMiddleware)(schemas_1.signInUserSchema), controllers_1.signInUserController);
    return router;
};
exports.sessionRoutes = sessionRoutes;
//# sourceMappingURL=session.route.js.map