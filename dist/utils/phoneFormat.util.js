"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneMatches = void 0;
exports.phoneMatches = {
    regex: /^\(\d{2}\)\s\d{5}-\d{4}$/gm,
    message: {
        phone: {
            error: 'Invalid phone format',
            expected: '(XX) XXXXX-XXXX',
        },
    },
};
//# sourceMappingURL=phoneFormat.util.js.map