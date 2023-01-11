"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    name: 'string',
    username: 'string',
    email: 'string',
    phone: 'string',
    cpf: 'string',
    password: 'string',
});
exports.User = (0, mongoose_1.model)('User', schema);
//# sourceMappingURL=User.model.js.map