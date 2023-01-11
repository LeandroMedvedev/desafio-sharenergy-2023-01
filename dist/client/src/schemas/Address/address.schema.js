"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressSchema = void 0;
var yup_1 = require("yup");
var utils_1 = require("../../utils");
exports.addressSchema = (0, yup_1.object)().shape({
    state: (0, yup_1.string)()
        .matches(utils_1.stateMatches.regex, { message: utils_1.stateMatches.message })
        .required(),
    city: (0, yup_1.string)().required(),
    street: (0, yup_1.string)().required(),
    houseNumber: (0, yup_1.number)().required(),
    zipCode: (0, yup_1.string)()
        .matches(utils_1.zipCodeMatches.regex, { message: utils_1.zipCodeMatches.message })
        .required(),
});
//# sourceMappingURL=address.schema.js.map