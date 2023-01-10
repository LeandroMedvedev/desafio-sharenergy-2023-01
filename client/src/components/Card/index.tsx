import { Box, Center, HStack } from '@chakra-ui/react';
import { MdQuiz } from 'react-icons/md';
// import { useAuth } from '../../contexts/AuthContext';
// import { useQuizzes } from '../../contexts/QuizContext';
import { Quiz } from '../../interfaces/Quiz';
import { theme } from '../../styles/theme';

interface CardProps {
  onClick: (quiz: Quiz) => void;
  quiz: Quiz;
}

export const Card = ({ onClick, quiz }: CardProps) => {
  //   const { completeTask, deleteTask } = useQuizzes();
  // const { token } = useAuth();

  return (
    <Box
      cursor="pointer"
      width={['310px', '70vw', '50vw', '50vw']}
      h={['20vh']}
      padding="5"
      boxShadow="4px 3px 20px 4px #EFF0EB"
      borderRadius="8px"
      borderColor="gray.50"
      borderWidth="1px"
      minWidth="90%"
      _hover={{ transform: 'translateY(-6px)', borderColor: 'gray.100' }}
      transition="border 0.2s, ease 0s, transform 0.2s"
    >
      <HStack spacing="4">
        <Center
          fontFamily={[theme.fonts.heading]}
          fontSize={[theme.fontSizes['3xl']]}
          color="gray.700"
        >
          <MdQuiz />
          {quiz.name}
        </Center>
      </HStack>
      <Box width="100%" marginTop="4"></Box>
    </Box>
  );
};
