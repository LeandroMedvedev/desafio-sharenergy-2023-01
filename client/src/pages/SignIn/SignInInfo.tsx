import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';

// import QuizSubmissions from '../../assets/quiz-submissions.svg';

export const SignInInfo = () => (
  <Grid
    display={['none', 'none', 'none', 'block']}
    paddingRight={['0px', '0px', '0px', '100px']}
    color="blue.600"
  >
    <Image
      //   src={QuizSubmissions}
      alt="Quiz"
      display={['none', 'none', 'none', 'block']}
      boxSize={['0px', '0px', '90%', '100%']}
    />
    <Heading
      marginTop="4"
      as="h1"
      fontSize={['40px', '40px', '40px', '50px']}
      display={['none', 'none', 'none', 'block']}
    >
      Quiz
    </Heading>
    <Box display={['none', 'none', 'none', 'block']}>
      <Text width={['0px', '0px', '260px', '280px']} fontSize="16px">
        Seus conhecimentos serão testados. <b>Preparado?</b> <br />
      </Text>
    </Box>
  </Grid>
);
