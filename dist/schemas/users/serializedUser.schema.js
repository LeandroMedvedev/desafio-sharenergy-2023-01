"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializedUserSchema = void 0;
var yup_1 = require("yup");
exports.serializedUserSchema = (0, yup_1.object)().shape({
    id: (0, yup_1.string)().required(),
    name: (0, yup_1.string)().required(),
    username: (0, yup_1.string)().required(),
    email: (0, yup_1.string)().required(),
    phone: (0, yup_1.string)().required(),
    cpf: (0, yup_1.string)().required(),
});
//# sourceMappingURL=serializedUser.schema.js.map