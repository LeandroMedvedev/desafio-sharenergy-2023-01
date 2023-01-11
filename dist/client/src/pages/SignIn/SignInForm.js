"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInForm = void 0;
var react_1 = require("@chakra-ui/react");
var fa_1 = require("react-icons/fa");
var si_1 = require("react-icons/si");
var Input_1 = require("../../components/Form/Input");
var theme_1 = require("../../styles/theme");
var SignInForm = function (_a) {
    var handleSignIn = _a.handleSignIn, errors = _a.errors, register = _a.register, loading = _a.loading;
    return (<react_1.Grid as="form" onSubmit={handleSignIn} marginTop="4" width={['95%', '400px', '400px', '45%']} height="450px" minWidth={['300px', '310px', '320px', '350px']} padding="15px 20px" border="1px solid" borderRadius="25px" borderColor="gray.200" background="white" color="gray.900" fontFamily={theme_1.theme.fonts.heading}>
      <react_1.Center>
        <react_1.Heading color="blue.600" fontSize="50px" fontWeight="light">
          Login
        </react_1.Heading>
      </react_1.Center>
      <react_1.VStack spacing="5" marginTop="6">
        <Input_1.Input icon={fa_1.FaEnvelope} {...register('email')} placeholder="E-mail" fontWeight="light" type="email" error={errors.email}/>

        <Input_1.Input icon={fa_1.FaLock} {...register('password')} placeholder="Senha" fontWeight="light" label="Senha" type="password" error={errors.password}/>
      </react_1.VStack>
      <react_1.VStack marginTop="4" spacing="5">
        <react_1.Button isLoading={loading} background="blue.600" width="100%" color="white" height="60px" borderRadius="8px" _hover={{ background: 'blue.600' }} type="submit" fontFamily={theme_1.theme.fonts.heading} fontWeight="light" fontSize={theme_1.theme.fontSizes['2xl']} leftIcon={<si_1.SiNintendogamecube />}>
          Entrar
        </react_1.Button>
        <react_1.HStack>
          <react_1.Text color="gray.700" fontSize={['0px', '14px', '14px']}>
            Não possui conta?
          </react_1.Text>
          <react_1.Link fontWeight="extrabold" color="red.900" href="/signup">
            Cadastre-se
          </react_1.Link>
        </react_1.HStack>
      </react_1.VStack>
    </react_1.Grid>);
};
exports.SignInForm = SignInForm;
//# sourceMappingURL=SignInForm.js.map