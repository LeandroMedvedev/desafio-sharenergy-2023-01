"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageNotFound = void 0;
var react_1 = require("@chakra-ui/react");
var react_router_dom_1 = require("react-router-dom");
var browser_error_svg_1 = __importDefault(require("../../assets/browser-error.svg"));
var PageNotFound = function () {
    var history = (0, react_router_dom_1.useHistory)();
    return (<react_1.Flex w="100%" h="70%" padding={['10px 15px', '10px 15px', '0px', '0px']} alignItems="center" justifyContent="center" height={['auto', 'auto', '98vh', '98vh']}>
      <react_1.Box mt="4" borderRadius="6px" bg="gray.50" p="8">
        <react_1.Heading>Puxaa!</react_1.Heading>
        <react_1.Image src={browser_error_svg_1.default}/>

        <react_1.Text mt="4" fontSize={['1xl', '1xl', '1xl', '2xl']}>
          Página não encontrada! <br />
          <b>Confira o endereço digitado.</b>
        </react_1.Text>
        <react_1.Button onClick={function () { return history.push('/signin'); }} w="100%" h="60px" mt="4" bg="red.400" color="white.0" _hover={{ bg: 'red.450' }}>
          Ir para suas tarefas
        </react_1.Button>
      </react_1.Box>
    </react_1.Flex>);
};
exports.PageNotFound = PageNotFound;
//# sourceMappingURL=index.js.map