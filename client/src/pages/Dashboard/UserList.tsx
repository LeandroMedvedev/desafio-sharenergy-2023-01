import { Box, Center, Grid } from '@chakra-ui/react';
import { Card } from '../../components/Card';
// import { CardSkeleton } from '../../components/Skeleton/CardSkeleton';
import { Quiz } from '../../interfaces/Quiz';

interface QuizListProps {
  loading: boolean;
  handleClick: (quiz: Quiz) => void;
}

export const QuizList = ({ loading, handleClick }: QuizListProps) => {
// export const QuizList = ({ quizzes, loading, handleClick }: QuizListProps) => {
  return (
    <Box>
      <Grid
        width="100%"
        templateColumns="repeat(auto-fill, minmax(320px, 1fr))"
        gap={5}
        paddingX={['1', '1', '1', '7']}
        marginTop="6"
      >
        {/* {loading ? ( */}
        {/* // <CardSkeleton repeatCount={4} /> */}
        {/* // ) : ( */}
        {/* {quizzes.map((quiz: Quiz) => (
          <Center key={quiz.id} as="span">
            <Card quiz={quiz} onClick={handleClick} />
          </Center>
        ))} */}
        {/* )} */}
      </Grid>
    </Box>
  );
};
