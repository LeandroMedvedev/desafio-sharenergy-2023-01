"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = void 0;
var bcrypt_1 = require("bcrypt");
var yup_1 = require("yup");
var utils_1 = require("../../utils");
exports.updateUserSchema = (0, yup_1.object)().shape({
    name: (0, yup_1.string)().transform(function (n) { return (0, utils_1.capitalize)(n); }),
    username: (0, yup_1.string)(),
    email: (0, yup_1.string)().email(utils_1.emailFormat.message).lowercase(),
    phone: (0, yup_1.string)().matches(utils_1.phoneMatches.regex, {
        message: utils_1.phoneMatches.message,
    }),
    cpf: (0, yup_1.string)().matches(utils_1.cpfMatches.regex, { message: utils_1.cpfMatches.message }),
    password: (0, yup_1.string)().transform(function (pass) { return (0, bcrypt_1.hashSync)(pass, 10); }),
});
//# sourceMappingURL=updateUser.schema.js.map