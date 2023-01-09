"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cpfMatches = void 0;
exports.cpfMatches = {
    regex: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm,
    message: {
        cpf: {
            error: 'Invalid CPF format',
            expected: 'XXX.XXX.XXX-XX',
        },
    },
};
//# sourceMappingURL=cpfMatches.util.js.map