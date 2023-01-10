import { Flex, useDisclosure } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { SignInInfo } from './SignInInfo';
import { SignInForm } from './SignInForm';
import { signInUserSchema } from '../../../../src/schemas';
import { ModalError } from '../../components/Modal/ModalError';
import { useAuth } from '../../contexts/AuthContext';

interface SignInData {
  [key: string]: any;
}

export const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signInUserSchema),
  });

  const handleSignIn = ({ username, password }: SignInData) => {
    setLoading(true);
    signIn({ username, password })
      .then((_) => setLoading(false))
      .catch((_) => {
        onModalErrorOpen();
        setLoading(false);
      });
  };

  const {
    isOpen: isModalErrorOpen,
    onOpen: onModalErrorOpen,
    onClose: onModalErrorClose,
  } = useDisclosure();

  return (
    <>
      <ModalError
        message="Credenciais inválidas."
        isOpen={isModalErrorOpen}
        onClose={onModalErrorClose}
      />
      <Flex
        padding={['10px 15px', '10px 15px', '0px', '0px']}
        alignItems="center"
        justifyContent="center"
        height={['auto', 'auto', '98vh', '98vh']}
        bgGradient={[
          'linear(to-t, brown.100 72%, white 28%)',
          'linear(to-t, brown.100 72%, white 28%)',
          'linear(to-r, brown.100 72%, white 28%)',
          'linear(to-r, brown.100 72%, white 28%)',
        ]}
        color="white"
      >
        <Flex
          width={['100%', '100%', '90%', '65%']}
          justifyContent="center"
          alignItems="center"
        >
          <SignInInfo />
          <SignInForm
            handleSignIn={handleSubmit(handleSignIn)}
            errors={errors}
            register={register}
            loading={loading}
          />
        </Flex>
      </Flex>
    </>
  );
};
