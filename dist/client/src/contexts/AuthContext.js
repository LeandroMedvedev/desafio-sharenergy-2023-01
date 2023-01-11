"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = exports.AuthProvider = void 0;
var react_1 = require("react");
var api_1 = require("../services/api");
var AuthContext = (0, react_1.createContext)({});
var useAuth = function () {
    var context = (0, react_1.useContext)(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
exports.useAuth = useAuth;
var AuthProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(function () {
        var token = localStorage.getItem('@Sharenergy:token');
        var user = localStorage.getItem('@Sharenergy:user');
        if (token && user) {
            return { token: token, user: JSON.parse(user) };
        }
        return {};
    }), data = _b[0], setData = _b[1];
    var signIn = (0, react_1.useCallback)(function (_a) {
        var username = _a.username, password = _a.password;
        return __awaiter(void 0, void 0, void 0, function () {
            var response, _b, token, user;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, api_1.api.post('/users/signIn', { username: username, password: password })];
                    case 1:
                        response = _c.sent();
                        _b = response.data, token = _b.token, user = _b.user;
                        localStorage.setItem('@Sharenergy:token', token);
                        localStorage.setItem('@Sharenergy:user', JSON.stringify(user));
                        setData({ token: token, user: user });
                        return [2 /*return*/];
                }
            });
        });
    }, []);
    var signOut = (0, react_1.useCallback)(function () {
        localStorage.removeItem('@Sharenergy:token');
        localStorage.removeItem('@Sharenergy:user');
        localStorage.clear();
        setData({});
    }, []);
    return (<AuthContext.Provider value={{ token: data.token, user: data.user, signIn: signIn, signOut: signOut }}>
      {children}
    </AuthContext.Provider>);
};
exports.AuthProvider = AuthProvider;
//# sourceMappingURL=AuthContext.js.map