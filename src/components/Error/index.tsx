import React from 'react';
import { SentimentVeryDissatisfied } from '@material-ui/icons';

import { Container } from './styles';

interface ErrorProps {
  messageDescription: string;
  messageBack: string;
}

const Error: React.FC<ErrorProps> = ({ messageDescription, messageBack }) => {
  return (
    <Container>
      <SentimentVeryDissatisfied />
      <p>{messageDescription}</p>
      <p>{messageBack}</p>
    </Container>
  );
};

export default Error;
