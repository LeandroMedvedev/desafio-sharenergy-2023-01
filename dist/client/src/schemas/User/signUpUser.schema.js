"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpUserSchema = void 0;
var bcrypt_1 = require("bcrypt");
var yup_1 = require("yup");
var utils_1 = require("../../utils");
var address_schema_1 = require("../Address/address.schema");
exports.signUpUserSchema = (0, yup_1.object)().shape({
    name: (0, yup_1.string)()
        .transform(function (n) { return (0, utils_1.capitalize)(n); })
        .required(),
    username: (0, yup_1.string)().required(),
    email: (0, yup_1.string)().email(utils_1.emailFormat.message).lowercase().required(),
    phone: (0, yup_1.string)()
        .matches(utils_1.phoneMatches.regex, { message: utils_1.phoneMatches.message })
        .required(),
    cpf: (0, yup_1.string)()
        .matches(utils_1.cpfMatches.regex, { message: utils_1.cpfMatches.message })
        .required(),
    password: (0, yup_1.string)()
        .transform(function (pass) { return (0, bcrypt_1.hashSync)(pass, 10); })
        .required(),
    address: (0, yup_1.lazy)(function (value) {
        return value !== undefined ? address_schema_1.addressSchema : (0, yup_1.mixed)().notRequired();
    }),
});
//# sourceMappingURL=signUpUser.schema.js.map