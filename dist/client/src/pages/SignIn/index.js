"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignIn = void 0;
var react_1 = require("@chakra-ui/react");
var yup_1 = require("@hookform/resolvers/yup");
var react_2 = require("react");
var react_hook_form_1 = require("react-hook-form");
var SignInInfo_1 = require("./SignInInfo");
var SignInForm_1 = require("./SignInForm");
var schemas_1 = require("../../schemas");
var ModalError_1 = require("../../components/Modal/ModalError");
var AuthContext_1 = require("../../contexts/AuthContext");
var SignIn = function () {
    var _a = (0, react_2.useState)(false), loading = _a[0], setLoading = _a[1];
    var signIn = (0, AuthContext_1.useAuth)().signIn;
    var _b = (0, react_hook_form_1.useForm)({
        resolver: (0, yup_1.yupResolver)(schemas_1.signInUserSchema),
    }), errors = _b.formState.errors, register = _b.register, handleSubmit = _b.handleSubmit;
    var handleSignIn = function (_a) {
        var username = _a.username, password = _a.password;
        setLoading(true);
        signIn({ username: username, password: password })
            .then(function (_) { return setLoading(false); })
            .catch(function (_) {
            onModalErrorOpen();
            setLoading(false);
        });
    };
    var _c = (0, react_1.useDisclosure)(), isModalErrorOpen = _c.isOpen, onModalErrorOpen = _c.onOpen, onModalErrorClose = _c.onClose;
    return (<>
      <ModalError_1.ModalError message="Credenciais inválidas." isOpen={isModalErrorOpen} onClose={onModalErrorClose}/>
      <react_1.Flex padding={['10px 15px', '10px 15px', '0px', '0px']} alignItems="center" justifyContent="center" height={['auto', 'auto', '98vh', '98vh']} bgGradient={[
            'linear(to-t, brown.100 72%, white 28%)',
            'linear(to-t, brown.100 72%, white 28%)',
            'linear(to-r, brown.100 72%, white 28%)',
            'linear(to-r, brown.100 72%, white 28%)',
        ]} color="white">
        <react_1.Flex width={['100%', '100%', '90%', '65%']} justifyContent="center" alignItems="center">
          <SignInInfo_1.SignInInfo />
          <SignInForm_1.SignInForm handleSignIn={handleSubmit(handleSignIn)} errors={errors} register={register} loading={loading}/>
        </react_1.Flex>
      </react_1.Flex>
    </>);
};
exports.SignIn = SignIn;
//# sourceMappingURL=index.js.map