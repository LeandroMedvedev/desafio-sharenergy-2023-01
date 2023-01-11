"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
var react_1 = require("@chakra-ui/react");
var framer_motion_1 = require("framer-motion");
var md_1 = require("react-icons/md");
var io_1 = require("react-icons/io");
var react_router_dom_1 = require("react-router-dom");
var question_circle_svg_1 = __importDefault(require("../../assets/question-circle.svg"));
var theme_1 = require("../../styles/theme");
var Home = function () {
    var history = (0, react_router_dom_1.useHistory)();
    return (<framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 3 }}>
      <react_1.Flex w="100%" h="98vh" bg="brown.100" flexDir="column" fontFamily={theme_1.theme.fonts.heading}>
        <react_1.Center w="100%" h="60vh" mt="3">
          <react_1.Image src={question_circle_svg_1.default} alt="To-Do List" w={['280px', '300px', '360px', '360px']}/>
        </react_1.Center>
        <react_1.Center h="170px" p="2">
          <react_1.Divider orientation="vertical" p="20px"></react_1.Divider>
          <react_1.Text fontSize={[
            theme_1.theme.fontSizes['6xl'],
            theme_1.theme.fontSizes['6xl'],
            theme_1.theme.fontSizes['6xl'],
            theme_1.theme.fontSizes['6xl'],
        ]} color={theme_1.theme.colors.gray['300']} fontWeight="bold">
            Quiz
          </react_1.Text>
        </react_1.Center>
        <react_1.Flex w="100%" h="40vh" flexDir={[
            'column-reverse',
            'column-reverse',
            'column-reverse',
            'row',
        ]} align="center">
          <react_1.Center w="50%" minW="250px" h="100%">
            <react_1.Button onClick={function () { return history.push('/signup'); }} w="40%" minWidth="240px" h={['60px']} _hover={{
            transition: '3s',
        }} borderRadius="5px" fontSize={theme_1.theme.fontSizes['3xl']} color="blue.600" boxShadow="4px 3px 20px 0px #20232A" rightIcon={<md_1.MdFormatAlignJustify />} transitionDelay="revert">
              Cadastrar
            </react_1.Button>
          </react_1.Center>
          <react_1.Center w="50%" minW="250px" h="100%">
            <react_1.Button onClick={function () { return history.push('/signin'); }} w="40%" minWidth="240px" height={['60px']} variant="outline" border="none" borderRadius="4px" fontSize={theme_1.theme.fontSizes['3xl']} color="white.0" bgColor="blue.600" boxShadow="4px 3px 20px 4px #20232A" leftIcon={<io_1.IoIosLogIn />} _hover={{
            transition: '3s',
        }}>
              Entrar
            </react_1.Button>
          </react_1.Center>
        </react_1.Flex>
      </react_1.Flex>
    </framer_motion_1.motion.div>);
};
exports.Home = Home;
//# sourceMappingURL=index.js.map