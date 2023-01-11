"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var react_router_dom_1 = require("react-router-dom");
var AuthContext_1 = require("../contexts/AuthContext");
var Router = function (_a) {
    var _b = _a.isPrivate, isPrivate = _b === void 0 ? false : _b, Component = _a.component, rest = __rest(_a, ["isPrivate", "component"]);
    var token = (0, AuthContext_1.useAuth)().token;
    return (<react_router_dom_1.Route {...rest} render={function () {
            return isPrivate === !!token ? (<Component />) : (<react_router_dom_1.Redirect to={isPrivate ? '/' : '/dashboard'}/>);
        }}/>);
};
exports.Router = Router;
//# sourceMappingURL=Router.js.map