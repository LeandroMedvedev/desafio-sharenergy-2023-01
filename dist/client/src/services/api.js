"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
var axios_1 = __importDefault(require("axios"));
exports.api = axios_1.default.create({
    baseURL: 'https://api-sharenergy-efzj.onrender.com/api',
});
//# sourceMappingURL=api.js.map