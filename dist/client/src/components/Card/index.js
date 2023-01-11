"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = require("@chakra-ui/react");
var md_1 = require("react-icons/md");
var theme_1 = require("../../styles/theme");
var Card = function (_a) {
    //   const { completeTask, deleteTask } = useQuizzes();
    // const { token } = useAuth();
    var onClick = _a.onClick, quiz = _a.quiz;
    return (<react_1.Box cursor="pointer" width={['310px', '70vw', '50vw', '50vw']} h={['20vh']} padding="5" boxShadow="4px 3px 20px 4px #EFF0EB" borderRadius="8px" borderColor="gray.50" borderWidth="1px" minWidth="90%" _hover={{ transform: 'translateY(-6px)', borderColor: 'gray.100' }} transition="border 0.2s, ease 0s, transform 0.2s">
      <react_1.HStack spacing="4">
        <react_1.Center fontFamily={[theme_1.theme.fonts.heading]} fontSize={[theme_1.theme.fontSizes['3xl']]} color="gray.700">
          <md_1.MdQuiz />
          {quiz.name}
        </react_1.Center>
      </react_1.HStack>
      <react_1.Box width="100%" marginTop="4"></react_1.Box>
    </react_1.Box>);
};
exports.Card = Card;
//# sourceMappingURL=index.js.map