"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
var capitalize = function (name) {
    return name
        .split(' ')
        .map(function (word) {
        var lowercaseWord = word.toLocaleLowerCase();
        return "".concat(lowercaseWord[0].toLocaleUpperCase()).concat(lowercaseWord.slice(1));
    })
        .join(' ');
};
exports.capitalize = capitalize;
//# sourceMappingURL=capitalize.util.js.map