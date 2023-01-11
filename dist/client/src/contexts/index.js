"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppProvider = void 0;
var react_1 = require("@chakra-ui/react");
var AuthContext_1 = require("./AuthContext");
var theme_1 = require("../styles/theme");
var AppProvider = function (_a) {
    var children = _a.children;
    return (<AuthContext_1.AuthProvider>
    <react_1.ChakraProvider theme={theme_1.theme}>{children}</react_1.ChakraProvider>
  </AuthContext_1.AuthProvider>);
};
exports.AppProvider = AppProvider;
//# sourceMappingURL=index.js.map