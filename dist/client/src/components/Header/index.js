"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = require("@chakra-ui/react");
var fa_1 = require("react-icons/fa");
var Menu_1 = require("./Menu");
var theme_1 = require("../../styles/theme");
var Header = function () {
    var _a = (0, react_1.useDisclosure)(), isOpen = _a.isOpen, onClose = _a.onClose, onToggle = _a.onToggle;
    return (<react_1.Flex h="18vh" borderBottom="1px" borderBottomColor="gray.0" paddingX="8" paddingY="4" boxShadow="4px 3px 20px 0px #F2F2F2" bg={theme_1.theme.colors.gray['0']}>
      <react_1.Flex align="center">
        <react_1.Center marginRight="0.5" background="blue.400" width="60px" height="60px" borderRadius="8px">
          <react_1.Text marginLeft="50px" borderRadius="6px" padding="10px 20px" fontSize={theme_1.theme.fontSizes['4xl']} fontFamily={theme_1.theme.fonts.body} color={theme_1.theme.colors.green['0']} bg={theme_1.theme.colors.green['800']} fontWeight={theme_1.theme.fontWeights.light}>
            <b>Q</b>uiz
          </react_1.Text>
        </react_1.Center>
      </react_1.Flex>
      <react_1.Center ml="auto" onClick={onToggle} fontSize={['2.5rem', '2.5rem', '2.5rem', '3rem']}>
        <fa_1.FaBars color={theme_1.theme.colors.gray['500']}/>
      </react_1.Center>
      <Menu_1.Menu isOpen={isOpen} onClose={onClose}/>
    </react_1.Flex>);
};
exports.Header = Header;
//# sourceMappingURL=index.js.map