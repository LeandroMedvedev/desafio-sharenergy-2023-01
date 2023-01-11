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
exports.Input = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
var inputVariance = {
    error: 'red.800',
    default: 'gray.200',
    filled: 'green.500',
    focus: 'blue.900',
};
var InputBase = function (_a, ref) {
    var name = _a.name, label = _a.label, _b = _a.error, error = _b === void 0 ? null : _b, Icon = _a.icon, rest = __rest(_a, ["name", "label", "error", "icon"]);
    var _c = (0, react_2.useState)(''), value = _c[0], setValue = _c[1];
    var _d = (0, react_2.useState)('default'), variance = _d[0], setVariance = _d[1];
    (0, react_2.useEffect)(function () {
        if (error) {
            return setVariance('error');
        }
    }, [error]);
    var manipulateInputFocus = (0, react_2.useCallback)(function () {
        if (!error) {
            setVariance('focus');
        }
    }, [error]);
    var manipulateInputBlur = (0, react_2.useCallback)(function () {
        if (value.length > 1 && !error) {
            return setVariance('filled');
        }
    }, [error, value]);
    return (<react_1.FormControl isInvalid={!!error}>
      <react_1.InputGroup flexDirection="column">
        {Icon && (<react_1.InputLeftElement color={inputVariance[variance]} mt="2.5">
            <Icon />
          </react_1.InputLeftElement>)}

        <react_1.Input name={name} onChangeCapture={function (event) { return setValue(event.currentTarget.value); }} color={inputVariance[variance]} borderColor={inputVariance[variance]} onFocus={manipulateInputFocus} onBlurCapture={manipulateInputBlur} variant="outline" _hover={{ backgroundColor: 'gray.0' }} _placeholder={{ color: 'gray.200' }} background="gray.50" _focus={{ bg: 'gray.100' }} size="lg" h="52px" ref={ref} {...rest}/>

        {!!error && <react_1.FormErrorMessage>{error.message}</react_1.FormErrorMessage>}
      </react_1.InputGroup>
    </react_1.FormControl>);
};
exports.Input = (0, react_2.forwardRef)(InputBase);
//# sourceMappingURL=Input.js.map