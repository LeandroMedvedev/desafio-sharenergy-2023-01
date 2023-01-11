"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
var react_router_dom_1 = require("react-router-dom");
var App_1 = __importDefault(require("./App"));
var contexts_1 = require("./contexts");
var root = client_1.default.createRoot(document.getElementById('root'));
root.render(<react_1.default.StrictMode>
    <react_router_dom_1.BrowserRouter>
      <contexts_1.AppProvider>
        <App_1.default />
      </contexts_1.AppProvider>
    </react_router_dom_1.BrowserRouter>
  </react_1.default.StrictMode>);
//# sourceMappingURL=index.js.map