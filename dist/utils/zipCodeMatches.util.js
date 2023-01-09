"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipCodeMatches = void 0;
exports.zipCodeMatches = {
    regex: /^\d{5}-\d{3}$/gm,
    message: {
        zipCode: {
            error: 'Invalid zipCode format',
            expected: 'XXXXX-XXX',
        },
    },
};
//# sourceMappingURL=zipCodeMatches.util.js.map