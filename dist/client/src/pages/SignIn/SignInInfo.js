"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInInfo = void 0;
var react_1 = require("@chakra-ui/react");
var quiz_submissions_svg_1 = __importDefault(require("../../assets/quiz-submissions.svg"));
var SignInInfo = function () { return (<react_1.Grid display={['none', 'none', 'none', 'block']} paddingRight={['0px', '0px', '0px', '100px']} color="blue.600">
    <react_1.Image src={quiz_submissions_svg_1.default} alt="Quiz" display={['none', 'none', 'none', 'block']} boxSize={['0px', '0px', '90%', '100%']}/>
    <react_1.Heading marginTop="4" as="h1" fontSize={['40px', '40px', '40px', '50px']} display={['none', 'none', 'none', 'block']}>
      Quiz
    </react_1.Heading>
    <react_1.Box display={['none', 'none', 'none', 'block']}>
      <react_1.Text width={['0px', '0px', '260px', '280px']} fontSize="16px">
        Seus conhecimentos serão testados. <b>Preparado?</b> <br />
      </react_1.Text>
    </react_1.Box>
  </react_1.Grid>); };
exports.SignInInfo = SignInInfo;
//# sourceMappingURL=SignInInfo.js.map