import React from 'react';
import { Box, Button, Center, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/resume-form');
  };

  return (
    <Center height="100vh">
      <Box>
        <Heading>Free Online Resume Builder</Heading>
        <Button mt={4} onClick={handleStart}>
        Build your resume
        </Button>
      </Box>
    </Center>
  );
};

export default Home;
