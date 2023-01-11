"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = require("@chakra-ui/react");
var io5_1 = require("react-icons/io5");
var AuthContext_1 = require("../../contexts/AuthContext");
var theme_1 = require("../../styles/theme");
var Menu = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    var _b = (0, AuthContext_1.useAuth)(), signOut = _b.signOut, user = _b.user;
    return (<react_1.Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <react_1.DrawerOverlay marginTop="18.5vh"/>
      <react_1.DrawerContent marginLeft="auto" marginTop="118px" width={['450px', '350px']}>
        <react_1.DrawerHeader borderColor="gray.150" color="gray.500" borderBottomWidth="1px" fontFamily={theme_1.theme.fonts.heading}>
          {user}
        </react_1.DrawerHeader>
        <react_1.DrawerBody>
          <react_1.Flex align="center" onClick={signOut} _hover={{ cursor: 'pointer' }}>
            <react_1.Center width="60px" height="60px" borderRadius="8px" border="0.5px solid #EFF0EB" fontSize="2xl">
              <io5_1.IoLogOut color={theme_1.theme.colors.gray['500']}/>
            </react_1.Center>
            <react_1.Box marginLeft="4">
              <react_1.Heading as="h2" color={theme_1.theme.colors.gray['500']} fontSize="lg" fontFamily={theme_1.theme.fonts.heading} fontWeight={theme_1.theme.fontWeights.medium}>
                Sign Out
              </react_1.Heading>
            </react_1.Box>
          </react_1.Flex>
        </react_1.DrawerBody>
      </react_1.DrawerContent>
    </react_1.Drawer>);
};
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map