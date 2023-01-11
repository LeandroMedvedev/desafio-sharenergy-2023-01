"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInUserSchema = void 0;
var yup_1 = require("yup");
exports.signInUserSchema = (0, yup_1.object)().shape({
    username: (0, yup_1.string)().required(),
    password: (0, yup_1.string)().required(),
});
//# sourceMappingURL=signInUser.schema.js.map