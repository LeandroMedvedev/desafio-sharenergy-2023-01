"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
var express_1 = require("express");
var controllers_1 = require("../controllers");
var middlewares_1 = require("../middlewares");
var schemas_1 = require("../schemas");
var router = (0, express_1.Router)();
var userRoutes = function () {
    router.post('/signUp', (0, middlewares_1.validateSchemaMiddleware)(schemas_1.signUpUserSchema), middlewares_1.checkUserExistsMiddleware, controllers_1.signUpUserController);
    router.get('', controllers_1.listUsersController);
    router.patch('/:id', middlewares_1.getUserByIdOr404Middleware, (0, middlewares_1.validateSchemaMiddleware)(schemas_1.updateUserSchema), middlewares_1.checkUserExistsMiddleware, controllers_1.updateUserController);
    router.delete('', controllers_1.deleteUserController);
    return router;
};
exports.userRoutes = userRoutes;
//# sourceMappingURL=user.route.js.map