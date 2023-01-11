"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizList = void 0;
var react_1 = require("@chakra-ui/react");
var QuizList = function (_a) {
    var loading = _a.loading, handleClick = _a.handleClick;
    // export const QuizList = ({ quizzes, loading, handleClick }: QuizListProps) => {
    return (<react_1.Box>
      <react_1.Grid width="100%" templateColumns="repeat(auto-fill, minmax(320px, 1fr))" gap={5} paddingX={['1', '1', '1', '7']} marginTop="6">
        {/* {loading ? ( */}
        {/* // <CardSkeleton repeatCount={4} /> */}
        {/* // ) : ( */}
        {/* {quizzes.map((quiz: Quiz) => (
          <Center key={quiz.id} as="span">
            <Card quiz={quiz} onClick={handleClick} />
          </Center>
        ))} */}
        {/* )} */}
      </react_1.Grid>
    </react_1.Box>);
};
exports.QuizList = QuizList;
//# sourceMappingURL=UserList.js.map