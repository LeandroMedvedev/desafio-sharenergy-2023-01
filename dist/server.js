"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var mongoose_1 = __importDefault(require("mongoose"));
var app_1 = __importDefault(require("./app"));
var db = process.env.DB;
var dbUser = process.env.DB_USER;
var dbPassword = process.env.DB_PASS;
mongoose_1.default.set('strictQuery', true);
mongoose_1.default
    .connect("mongodb+srv://".concat(dbUser, ":").concat(dbPassword, "@cluster0.hbqgswx.mongodb.net/").concat(db, "?retryWrites=true&w=majority"))
    .then(function () {
    console.log('Connected database!');
    var PORT = process.env.PORT || 3333;
    app_1.default.listen(PORT, function () {
        return console.log("App running!\nhttp://localhost:".concat(PORT));
    });
})
    .catch(function (error) {
    return console.log("Error connecting to MongoDB Atlas:\n".concat(error));
});
//# sourceMappingURL=server.js.map