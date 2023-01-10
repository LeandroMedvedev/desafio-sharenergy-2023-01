import {
  Button,
  Center,
  Grid,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { SiNintendogamecube } from 'react-icons/si';

import { Input } from '../../components/Form/Input';
import { theme } from '../../styles/theme';

interface SignInFormProps {
  handleSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<FieldValues>;
  loading: boolean;
}

export const SignInForm = ({
  handleSignIn,
  errors,
  register,
  loading,
}: SignInFormProps) => {
  return (
    <Grid
      as="form"
      onSubmit={handleSignIn}
      marginTop="4"
      width={['95%', '400px', '400px', '45%']}
      height="450px"
      minWidth={['300px', '310px', '320px', '350px']}
      padding="15px 20px"
      border="1px solid"
      borderRadius="25px"
      borderColor="gray.200"
      background="white"
      color="gray.900"
      fontFamily={theme.fonts.heading}
    >
      <Center>
        <Heading color="blue.600" fontSize="50px" fontWeight="light">
          Login
        </Heading>
      </Center>
      <VStack spacing="5" marginTop="6">
        <Input
          icon={FaEnvelope}
          {...register('email')}
          placeholder="E-mail"
          fontWeight="light"
          type="email"
          error={errors.email}
        />

        <Input
          icon={FaLock}
          {...register('password')}
          placeholder="Senha"
          fontWeight="light"
          label="Senha"
          type="password"
          error={errors.password}
        />
      </VStack>
      <VStack marginTop="4" spacing="5">
        <Button
          isLoading={loading}
          background="blue.600"
          width="100%"
          color="white"
          height="60px"
          borderRadius="8px"
          _hover={{ background: 'blue.600' }}
          type="submit"
          fontFamily={theme.fonts.heading}
          fontWeight="light"
          fontSize={theme.fontSizes['2xl']}
          leftIcon={<SiNintendogamecube />}
        >
          Entrar
        </Button>
        <HStack>
          <Text color="gray.700" fontSize={['0px', '14px', '14px']}>
            Não possui conta?
          </Text>
          <Link fontWeight="extrabold" color="red.900" href="/signup">
            Cadastre-se
          </Link>
        </HStack>
      </VStack>
    </Grid>
  );
};
