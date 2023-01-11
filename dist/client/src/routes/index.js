"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var react_router_dom_1 = require("react-router-dom");
var Dashboard_1 = require("../pages/Dashboard");
var Home_1 = require("../pages/Home");
var PageNotFound_1 = require("../pages/PageNotFound");
var Router_1 = require("./Router");
var SignIn_1 = require("../pages/SignIn");
// import { SignUp } from '../pages/SignUp';
var Routes = function () { return (<react_router_dom_1.Switch>
    <Router_1.Router path="/" exact component={Home_1.Home}/>
    <Router_1.Router path="/signin" component={SignIn_1.SignIn}/>
    {/* <Router path="/signup" component={SignUp} /> */}
    <Router_1.Router path="/dashboard" component={Dashboard_1.Dashboard} isPrivate/>
    <Router_1.Router path="*" component={PageNotFound_1.PageNotFound}/>
  </react_router_dom_1.Switch>); };
exports.Routes = Routes;
//# sourceMappingURL=index.js.map