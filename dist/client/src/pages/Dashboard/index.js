"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboard = void 0;
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
// import { Button } from '../../components/Button';
var Header_1 = require("../../components/Header");
var AuthContext_1 = require("../../contexts/AuthContext");
var UserList_1 = require("./UserList");
var Dashboard = function () {
    var token = (0, AuthContext_1.useAuth)().token;
    // const { loadQuizzes, quizzes } = useQuizzes();
    var _a = (0, react_1.useState)(true), loading = _a[0], setLoading = _a[1];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _b = (0, react_1.useState)({}), chosenQuiz = _b[0], setChosenQuiz = _b[1];
    // useEffect(() => {
    //   loadQuizzes(token).then((_: any) => setLoading(false));
    // }, [loadQuizzes, token]);
    var handleClick = function (quiz) {
        setChosenQuiz(quiz);
        // onUpdateTaskOpen();
    };
    return (<react_2.Box>
      <Header_1.Header />
      <UserList_1.QuizList loading={loading} handleClick={handleClick}/>
      {/* <QuizList loading={loading} handleClick={handleClick} quizzes={quizzes} /> */}
      {/* <Button /> */}
    </react_2.Box>);
};
exports.Dashboard = Dashboard;
//# sourceMappingURL=index.js.map