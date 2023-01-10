import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
// import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import { useAuth } from '../../contexts/AuthContext';
// import { useQuizzes } from '../../contexts/QuizContext';
import { Quiz } from '../../interfaces/Quiz';
import { QuizList } from './UserList';

export const Dashboard = () => {
  const { token } = useAuth();
  // const { loadQuizzes, quizzes } = useQuizzes();
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chosenQuiz, setChosenQuiz] = useState<Quiz>({} as Quiz);

  // useEffect(() => {
  //   loadQuizzes(token).then((_: any) => setLoading(false));
  // }, [loadQuizzes, token]);

  const handleClick = (quiz: Quiz) => {
    setChosenQuiz(quiz);
    // onUpdateTaskOpen();
  };

  return (
    <Box>
      <Header />
      <QuizList loading={loading} handleClick={handleClick} />
      {/* <QuizList loading={loading} handleClick={handleClick} quizzes={quizzes} /> */}
      {/* <Button /> */}
    </Box>
  );
};
